import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { LockClosedIcon } from '@heroicons/react/solid';

import ChatImage from '../../assets/notification.svg';
import Button from '../../components/Button';
import Rocket from '../../components/Logo';
// import api from '../../services';

const Channel: React.FC = () => {
  const [copied, onCopied] = useState(false);
  const [message, onMessage] = useState('');

  const {
    id,
  } = useParams();

  const clipboard = async () => {
    if (id && 'clipboard' in navigator) {
      await navigator.clipboard.writeText(id);

      onCopied(true);

      setTimeout(() => onCopied(false), 1000);
    }
  };

  // api.post(`/channels/${id}/messages`, { message: text })

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
          <div className="box-chat">
            <input
              type="text"
              value={message}
              onChange={({ target }) => onMessage(target.value)}
              className="box-chat-ask bg-[#FBFCFF]"
              placeholder="O que você quer perguntar?"
            />

            <div className="box-chat-button">
              <span className="flex gap-[0.4rem]">
                <LockClosedIcon className="w-5 h-5" />
                Essa pergunta é anônima
              </span>
              <Button size="sm" label="Enviar" />
            </div>
          </div>
        </div>
        <div className="notification grid m-[auto] gap-3 max-w-[17.3rem]">
          <img src={ChatImage} alt="" className="w-[9.3rem] h-[8.5rem] m-[auto]" />
          <h2 className="text-sub font-semibold text-ttext">Nenhuma mensagem por aqui...</h2>
          <p className="text-greygrey font-sans text-details text-center">
            Faça sua primeira pergunta e envie o
            código dessa sala para outras pessoas!
          </p>
        </div>
      </main>
    </>
  );
};

export default Channel;
