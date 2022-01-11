import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/Icon.svg';
import ChatImage from '../../assets/Ilustração.svg';

const Channel: React.FC = () => {
  const navigate = useNavigate();

  const submit = () => {
    // request to api.

    navigate('');
  };

  return (
    <main>
      <header>
        <div className="icon">
          <img src={Logo} alt="logo da rocketq" />
          <h1 className="text-h1">
            rocket
            <span className="text-blue">.</span>
            q
          </h1>
        </div>
      </header>
    </main>
  );
};
