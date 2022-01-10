import { LogoutIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/outline';
import Logo from '../../assets/Icon.svg';
import Saly from '../../assets/Saly-6.svg';

const Homepage: React.FC = () => (

  <main className="wraper container">
    <div className="picture flex">
      <div className="picture-logo">
        <img src={Logo} alt="logo da rocketq" />
        <h1 className="text-h1">
          rocket
          <span className="text-blue">.</span>
          q
        </h1>
      </div>
      <div className="picture-illustration">
        <img src={Saly} alt="Mascote da rocket.q" />
      </div>
    </div>
    <div className="homepage grid">
      <div className="homepage-member relative">
        <h1 className="text-h1">Entre como participante</h1>
        <form action="" method="post" className="grid">
          <input
            type="text"
            className="room h-12 w-[22.7rem] p-4 text-base bg-[#FBFCFF]"
            placeholder="Código da sala"
          />
          <button
            type="submit"
            className="button h-12 w-[22.7rem] bg-blue gap-3 pl-[6.5rem] pr-24"
          >
            <LogoutIcon
              className="login w-6 h-6"
            />
            Entrar na sala
          </button>
        </form>
      </div>
      <div className="divider text-greyblue flex gap-[0.84rem]">
        <div className="row w-[9.8rem] h-[1px] bg-greyblue" />
        ou
        <div className="row w-[9.8rem] h-[1px] bg-greyblue" />
      </div>
      <div className="homepage-host flex flex-col gap-6">
        <h1 className="text-h1">
          Crie sua própria sala, de
          <br />
          forma fácil
        </h1>
        <button type="button" className="button1 flex w-[22.7rem] h-12 gap-1 text-blue pl-32 pr-20">
          <UsersIcon className="create w-5 h-5 text-blue" />
          Criar sala
        </button>
      </div>
    </div>
  </main>

);

export default Homepage;
