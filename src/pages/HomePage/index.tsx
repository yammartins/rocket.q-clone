import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Saly from '../../assets/Saly-6.svg';
import Button from '../../components/Button';
import Rocket from '../../components/Logo';
import api from '../../services';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const [text, onText] = useState('');
  const [error, onError] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    // request to api.
    await api.get(`/channels/${text}`)
      .then(({ data }) => navigate(`/room/${data.id}`))
      .catch(({ message }) => onError(message));

    setTimeout(() => onError(false), 5000);
  };

  return (
    <>
      <header className="flex container mt-[2.185rem]">
        <div className="picture flex">
          <Rocket />
        </div>
      </header>

      <main className="main flex container">
        <div className="picture-illustration">
          <img src={Saly} alt="Mascote da rocket.q" />
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
                value={text}
                onChange={({ target }) => onText(target.value)}
                className="channel h-12 w-full focus-visible:outline-none p-4 text-base bg-bground"
                placeholder="Código da sala"
              />

              <Button
                submit
                className="flex gap-[0.625rem] justify-center w-full"
                iconLeft="login"
                label="Entrar na sala"
                disabled={text ? text.length <= 0 : true}
              />
              {error && (<span className="text-trash text-details font-poppins mt-4 "> Ops ... Esse canal não existe. Por que não tenta criar um?</span>)}
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
      </main>
    </>

  );
};

export default Homepage;
