import { LogoutIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/outline';
import Illustration from '../Decoration';

const Homepage: React.FC = () => (

  <main className="homepage">
    <Illustration />
    <div className="homepage-main">
      <div className="homepage-main-member">
        <h1>Entre como participante</h1>
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
        <h1>Crie sua própria sala, de forma fácil</h1>
        <button type="button">
          <UsersIcon className="create" />
          Criar sala
        </button>
      </div>
    </div>
  </main>

);

export default Homepage;
