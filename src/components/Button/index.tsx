import { HTMLAttributes } from 'react';

import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  submit?: boolean,
  enterchannel?: boolean;
  maincreate?: boolean;
  serverid?: number;
  channelid?: boolean;
  minicreate?: boolean;
  form?: boolean;

}

const Button: React.FC<ButtonProps> = ({
  enterchannel,
  submit,
  maincreate,
  children,
  channelid,
  minicreate,
  form,
  ...rest
}) => {
  const styled = classNames(
    'button',
    enterchannel && 'enterchannel',
    maincreate && 'hp-createchannel',
    channelid && 'channel-id',
    minicreate && 'minicreate',
    form && 'chat-submit',
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
