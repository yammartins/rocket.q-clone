import { Link } from 'react-router-dom';

import { LockClosedIcon } from '@heroicons/react/solid';

import Logo from '../../assets/Icon.svg';
import ChatImage from '../../assets/notification.svg';
import Button from '../../components/Button';

const Channel: React.FC = () => (
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
        <Button label="#512302" iconRight="duplicate" appearance="outline" className="gap-[0.625rem]" />
        <Link to="/createsala">
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

export default Channel;
