import { LogoutIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/outline';
import Logo from '../../assets/Icon.svg';
import Saly from '../../assets/Saly-6.svg';

const CreateSala: React.FC = () => (
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
  </main>

);

export default CreateSala;
