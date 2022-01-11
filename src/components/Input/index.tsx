import { HTMLAttributes } from 'react';

import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  submit?: boolean,
  login?: string;
  maincreate?: string;
}

const Button: React.FC<ButtonProps> = ({
  login,
  submit,
  maincreate,
  children,
  ...rest
}) => {
  const styled = classNames(
    'default',
    login && 'login',
    maincreate && 'hp-createchannel',
  );

  return (
    <button
      {...rest}
      type={submit ? 'submit' : 'button'}
      className={styled}
    >
      {children}
    </button>
  );
};

export default Button;
