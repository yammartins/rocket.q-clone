import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  UserIcon, CheckIcon, TrashIcon, LockClosedIcon,
} from '@heroicons/react/solid';

import ChatImage from '../../assets/notification.svg';
import Button from '../../components/Button';
import Rocket from '../../components/Logo';
import api from '../../services';
import { MessageHandles } from './types';

const Channel: React.FC = () => {
  const [copied, onCopied] = useState(false);
  const [message, onMessage] = useState<MessageHandles[]>([]);
  const [text, onText] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const {
    id,
  } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const {
        data,
      } = await api.get('/messages');

      const filtered = data.filter((messages: MessageHandles) => messages.channel_id === id);

      onMessage(filtered);
    };

    fetch();
  }, [id]);

  useEffect(() => {
    if (ref.current) {
      const { clientHeight } = document.getElementsByTagName('html')[0];
      // const { top } = ref.current?.getBoundingClientRect() as DOMRect;

      ref.current.style.maxHeight = `${clientHeight - 340}px`;
    }
  }, []);

  const clipboard = async () => {
    if (id && 'clipboard' in navigator) {
      await navigator.clipboard.writeText(id);

      onCopied(true);

      setTimeout(() => onCopied(false), 1000);
    }
  };

  const submit = async (e: any) => {
    e.preventDefault();

    const {
      data,
    } = await api.post('/messages', {
      message: text,
      channel_id: id,
      read: false,
    });

    onText('');

    onMessage((prev) => [...prev, data]);
  };

  const deleteMessage = async (key: number) => {
    await api.delete(`/messages/${key}`);

    const filter = message.filter((field) => field.id !== key);

    onMessage(filter);
  };

  const readMessage = async (key: number, elem: MessageHandles) => {
    await api.put(`/messages/${key}`, {
      ...elem,
      read: ! elem.read,
    });

    const readed = message.map((field) => (field.id === key ? {
      ...field,
      read: ! elem.read,
    } : field));

    onMessage(readed);
  };

  return (
    <>
      <header className="container channel flex mt-[2.185rem] mb- items-center justify-between">
        <Rocket />
        <div className="channel-buttons flex gap-2">
          <div className="flex flex-col">
            <Button
              label={`#${id}`}
              onClick={clipboard}
              iconRight="duplicate"
              appearance="outline"
              className="gap-[0.625rem]"
            />

            {copied && <span className="mt-1">Código copiado com sucesso</span>}
          </div>

          <Link to="/create-room">
            <Button label="Criar sala" submit iconLeft="users" className="gap-[0.625rem]" />
          </Link>
        </div>
      </header>
      <main className="channelbox container">
        <div className="box mb-[3.4rem]">
          <h1 className="text-h1">Faça sua pergunta</h1>
          <form
            onSubmit={submit}
          >
            <div className="box-chat">
              <input
                type="text"
                value={text}
                onChange={({ target }) => onText(target.value)}
                className="box-chat-ask bg-[#FBFCFF]"
                placeholder="O que você quer perguntar?"
              />

              <div className="box-chat-button">
                <span className="flex gap-[0.4rem]">
                  <LockClosedIcon className="w-5 h-5" />
                  Essa pergunta é anônima
                </span>
                <Button
                  submit
                  size="sm"
                  label="Enviar"
                />
              </div>
            </div>
          </form>
        </div>
        {message.length <= 0 && (
          <div className="notification grid m-[auto] gap-3 max-w-[17.3rem]">
            <img src={ChatImage} alt="" className="w-[9.3rem] h-[8.5rem] m-[auto]" />
            <h2 className="text-sub font-semibold text-ttext">Nenhuma mensagem por aqui...</h2>
            <p className="text-greygrey font-sans text-details text-center">
              Faça sua primeira pergunta e envie o
              código dessa sala para outras pessoas!
            </p>
          </div>
        ) }
        <div className="questionslog" ref={ref}>
          {message.map((props) => {
            const {
              id: key,
              message: value,
              read,
            } = props;

            return (
              <div key={key} className={`question-open ${read ? 'question-closed' : ''} `}>
                <div className="question-box">
                  <div className="question-box-profile">
                    <UserIcon className="w-6 h-6 text-wtext" />
                  </div>
                  <p className="text-ttext relative font-sans font-normal text-base w-[auto]">
                    {value}
                  </p>
                </div>
                <div className="question-buttons">
                  <div
                    role="presentation"
                    onClick={() => readMessage(key, props)}
                    className="check"
                  >
                    <CheckIcon className="w-5 h-5 text-blue" />
                    <span className="text-greygrey font-sans font-normal text-base">
                      {read ? 'Pergunta lida' : 'Marcar como lida'}
                    </span>
                  </div>
                  {! read && (
                    <div
                      className="trash"
                      onClick={() => deleteMessage(key)}
                      role="presentation"
                    >
                      <TrashIcon className="w-5 h-5 text-trash" />
                      <span className="text-greygrey font-sans font-normal text-base"> Excluir</span>
                    </div>
                  ) }
                </div>
              </div>
            );
          })}
        </div>
        <div className="deletemessage-wraper">
          <div className="relative py-16 px-[5.375rem] bg-bground rounded-lg text-center m-auto max-w-[36.875rem] max-h-[22.625rem]">
            <h2 className="text-box text-ttext font-bold font-poppins">Excluir pergunta</h2>
            <p className="text-details font-poppins text-greygrey mt-3 mb-6">Tem certeza que você deseja excluir esta pergunta?</p>
            <form action="">
              <input
                type="text"
                className="w-[18.875rem] border-2 border-greygrey py-3 placeholder:text-greyblue placeholder:font-poppin rounded-lg text-center ml-4"
                placeholder="Insira sua senha"
              />
              <div className="flex mt-10 gap-2 justify-center">
                <Button
                  label="Cancelar"
                  submit
                  appearance="cancel"
                />

                <Button
                  label="Sim, excluir"
                  submit
                  appearance="confirm"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Channel;
