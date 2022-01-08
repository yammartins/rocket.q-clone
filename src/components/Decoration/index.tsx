import Logo from '../../assets/Icon.svg';
import Saly from '../../assets/Saly-6.svg';

const Illustration = () => (

  <div className="picture">
    <div className="picture-logo"> <img src={Logo} alt="logo da rocketq" /> rocket<span>.</span>q </div>
    <div className="picture-illustration">
      <img src={Saly} alt="Mascote da rocket.q" />
    </div>
  </div>

);

export default Illustration;
