import { useNavigate } from 'react-router-dom';

import { UsersIcon } from '@heroicons/react/outline';

import Logo from '../../assets/Icon.svg';
import Saly from '../../assets/Saly-6.svg';
import Button from '../../components/Button';

const CreateSala: React.FC = () => {
  const navigate = useNavigate();

  const submit = () => {
    // request to api.

    navigate('/canaldoyam');
  };

  return (
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
      <div className="create-room m-[auto]">
        <h1 className="text-h1">Crie sua própria sala</h1>
        <form
          onSubmit={submit}
          className="grid"
        >
          <input
            type="text"
            className="h-12 w-[22.7rem] p-4 text-base bg-[#FBFCFF] mt-6 mb-5 rounded-lg border-2 border-greyblue"
            placeholder="Insira uma senha"
          />
          <Button submit enterchannel>
            <UsersIcon className="create w-5 h-5" />
            Criar sala
          </Button>
        </form>
      </div>
    </main>
  );
};

export default CreateSala;
