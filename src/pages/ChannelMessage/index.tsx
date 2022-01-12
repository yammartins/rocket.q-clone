import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  UserIcon, CheckIcon, TrashIcon, LockClosedIcon,
} from '@heroicons/react/outline';

import Button from '../../components/Button';
import Rocket from '../../components/Logo';

const chat = [
  {
    id: '1',
    question: 'O que é typescript?',
  },
  {
    id: '2',
    question: 'A Ilíada vem antes da Odisseia?',
  },
  {
    id: '3',
    question: 'Quem é o herói da Ilíada: Aquiles ou Heitor?',
  },
  {
    id: '4',
    question: 'Tailwind é uma boa ferramenta, é essencial?',
  },
  {
    id: '5',
    question: 'Obrigado pela aula.',
  },
  {
    id: '6',
    question: `"Para que não sejamos mais meninos inconstantes, levados em roda por todo o vento de doutrina, pelo engano dos homens que com astúcia enganam fraudulosamente. Antes, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo" 
    - Efésios 4:14 e 15`,
  },
  {
    id: '7',
    question: `"Você quer finalmente superar o nojo que a história moderna lhe causa, desde a decadência do Império Romano, e ter uma ideia geral das nações que habitam e desolam a terra. Nesta imensidão, só procurais o que merece ser conhecido: o espírito, os costumes, os costumes das principais nações, amparados em factos que não é permitido ignorar."
    - Voltaire, Ensaio dos costumes e dos espíritos das nações.`,
  },

];

const MessageChat: React.FC = () => {
  const [cruz, onCruz] = useState(false);

  return (

    <>
      <header className="container channel flex mt-[2.185rem] mb- items-center justify-between">
        <Rocket />
        <div className="channel-buttons flex gap-2">
          <Button label="#512302" iconRight="duplicate" appearance="outline" className="gap-[0.625rem]" />
          <Link to="/createsala">
            <Button label="Criar sala" submit iconLeft="users" className="gap-[0.625rem]" />
          </Link>
        </div>
      </header>
      <main className="channelbox container">
        <div className="box mb-4">
          <h1 className="text-h1">Faça sua pergunta</h1>
          <div className="box-chat">
            <input type="text" className="box-chat-ask bg-[#FBFCFF]" placeholder="O que você quer perguntar?" />
            <div className="box-chat-button">
              <span className="flex gap-[0.4rem]">
                <LockClosedIcon className="w-5 h-5" />
                Essa pergunta é anônima
              </span>
              <Button size="sm" label="Enviar" />
            </div>
          </div>
        </div>
        <div className="questionslog flex flex-col gap-2">
          {chat.map(({ question, id }) => (
            <div key={id} className={`question-open ${cruz ? 'question-closed' : ''} `}>
              <div className="question-box">
                <div className="question-box-profile">
                  <UserIcon className="w-6 h-6 text-wtext" />
                </div>
                <p className="text-ttext relative font-sans font-normal text-base w-[auto]">
                  {question}
                </p>
              </div>
              <div className="question-buttons">
                <div
                  role="presentation"
                  onClick={() => onCruz((prev) => ! prev)}
                  className="check"
                >
                  <CheckIcon className="w-5 h-5 text-blue" />
                  <span className="text-greygrey font-sans font-normal text-base"> Marcar como lida</span>
                </div>
                <div className="trash">
                  <TrashIcon className="w-5 h-5 text-trash" />
                  <span className="text-greygrey font-sans font-normal text-base"> Excluir</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default MessageChat;
