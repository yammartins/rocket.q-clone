import { Link } from 'react-router-dom';

import { DuplicateIcon } from '@heroicons/react/outline';
import { UsersIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/outline';
import { CheckIcon } from '@heroicons/react/outline';
import { TrashIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/solid';

import Logo from '../../assets/Icon.svg';
import Button from '../../components/Button';

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
    question: 'Valeu pela aula.',
  },

];

const MessageChat: React.FC = () => (
  <>
    <header className="container channel flex mt-[2.185rem] mb- items-center justify-between">
      <div className="channel-icon flex gap-3">
        <img src={Logo} alt="logo da rocketq" />
        <h1 className="text-h1">
          rocket
          <span className="text-blue">.</span>
          q
        </h1>
      </div>
      <div className="channel-buttons flex gap-2">
        <Button channelid>
          #512302
          <DuplicateIcon className="create w-5 h-5" />
        </Button>
        <Link to="/createsala">
          <Button minicreate submit>
            <UsersIcon className="create w-[1.1rem] h-[1.1rem]" />
            <span>Criar sala</span>
          </Button>
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
            <Button form>
              Enviar
            </Button>
          </div>
        </div>
      </div>
      <div className="questionslog flex flex-col gap-2">
        {chat.map(({ question, id }) => (
          <div key={id} className="question w-full h-[auto] bg-liblue rounded-lg py-6 pr-8 pl-6">
            <div className="question-box">
              <div className="question-box-profile bg-blue rounded-full w-[3.4rem] h-[3.4rem] relative items-center">
                <UserIcon className="w-6 h-6 relative m-[auto] text-wtext" />
              </div>
              <p className="question-box-qmessage">
                {question}
              </p>
            </div>
            <div className="question-buttons flex">
              <div className="check">
                <CheckIcon className="w-5 h-5 text-blue" />
                <span className="check-text"> Marcar como lida</span>
              </div>
              <div className="trash">
                <TrashIcon className="w-5 h-5 text-trash" />
                <span className="trash-text"> Excluir</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default MessageChat;
