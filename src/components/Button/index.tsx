import { HTMLAttributes } from 'react';

import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  submit?: boolean,
  enterchannel?: boolean;
  maincreate?: boolean;
  serverid?: number;
}

const Button: React.FC<ButtonProps> = ({
  enterchannel,
  submit,
  maincreate,
  children,
  ...rest
}) => {
  const styled = classNames(
    'default',
    enterchannel && 'enterchannel',
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
