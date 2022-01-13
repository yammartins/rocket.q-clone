import { useNavigate, Link } from 'react-router-dom';

import Saly from '../../assets/Saly-6.svg';
import Button from '../../components/Button';
import Rocket from '../../components/Logo';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const submit = () => {
    // request to api.

    navigate('canaldoyam');
  };

  return (
    <header className="wraper container">
      <div className="picture flex">
        <Rocket />
        <div className="picture-illustration">
          <img src={Saly} alt="Mascote da rocket.q" />
        </div>
      </div>
      <div className="homepage grid">
        <div className="homepage-member relative">
          <h1 className="text-h1">Entre como participante</h1>
          <form
            onSubmit={submit}
            className="grid"
          >
            <input
              type="text"
              className="channel h-12 w-full focus-visible:outline-none p-4 text-base bg-bground"
              placeholder="Código da sala"
            />

            <Button submit className="flex gap-[0.625rem] justify-center w-full" iconLeft="login" label="Entrar na sala" />
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
          <Link to="create-room">
            <Button iconLeft="users" label="Criar sala" appearance="outline" className="flex gap-[0.625rem] justify-center w-full" />
          </Link>
        </div>
      </div>
    </header>

  );
};

export default Homepage;
