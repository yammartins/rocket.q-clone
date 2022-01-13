import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Saly from '../../assets/Saly-6.svg';
import Button from '../../components/Button';
import Rocket from '../../components/Logo';
import api from '../../services';

const CreateSala: React.FC = () => {
  const [text, onText] = useState('');

  const navigate = useNavigate();

  const submit = async (e: any) => {
    e.preventDefault();

    const { data } = await api.post('/channels', { password: text });

    navigate(`/room/${data.id}`);
  };

  return (
    <main className="wraper container">
      <div className="picture flex">
        <Rocket />
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
            value={text}
            onChange={({ target }) => onText(target.value)}
            className="h-12 w-[22.7rem] p-4 text-base bg-[#FBFCFF] mt-6 mb-5 rounded-lg border-2 border-greyblue"
            placeholder="Insira uma senha"
          />

          <Button
            submit
            iconLeft="users"
            label="Criar sala"
            disabled={text ? text.length <= 5 : true}
            className="flex gap-[0.625rem] justify-center w-full"
          />
        </form>
      </div>
    </main>
  );
};

export default CreateSala;
