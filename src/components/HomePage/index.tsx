import { LogoutIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/outline';
import Logo from '../../assets/Icon.svg';
import Saly from '../../assets/Saly-6.svg';

const Homepage: React.FC = () => (

  <main className="container flex">
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
    <div className="homepage-main">
      <div className="homepage-main-member">
        <h1 className="text-h1">Entre como participante</h1>
        <form action="" method="post">
          <input type="text" className="room" />
          <button type="submit">
            <LogoutIcon className="login" />
            Entrar na sala
          </button>
        </form>
      </div>
      <div className="divider">ou</div>
      <div className="homepage-main-host">
        <h1 className="text-h1">Crie sua própria sala, de forma fácil</h1>
        <button type="button">
          <UsersIcon className="create" />
          Criar sala
        </button>
      </div>
    </div>
  </main>

);

export default Homepage;
