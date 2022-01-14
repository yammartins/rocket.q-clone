import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Logo from '../../assets/Icon.svg';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  smith?: boolean;
}

const Rocket: React.FC<LogoProps> = ({
  className,
  ...rest
}) => {
  const styledlogo = classNames(
    'picture-logo',
    className,
  );

  return (
    <Link to="">
      <div
        {...rest}
        className={styledlogo}
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
};
export default Rocket;
