import { Link } from 'react-router-dom';

import Logo from '../../assets/Icon.svg';

const Rocket = () => (
  <Link to="">
    <div
      className="picture-logo"
    >
      <img src={Logo} alt="logo da rocketq" />
      <h1 className="text-h1">
        rocket
        <span className="text-blue">.</span>
        q
      </h1>
    </div>
  </Link>
);

export default Rocket;
