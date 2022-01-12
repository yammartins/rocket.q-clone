import { HTMLAttributes } from 'react';

import { UsersIcon, DuplicateIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  full?: boolean,
  size?: 'sm' | 'md',
  label: string,
  iconLeft?: 'users' | 'duplicate',
  iconRight?: 'users' | 'duplicate',
  appearance?: 'outline' | 'solid';
  submit?: boolean,
  enterchannel?: boolean;
  maincreate?: boolean;
  serverid?: number;
  channelid?: boolean;
  minicreate?: boolean;
  form?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  full = false,
  size = 'md',
  label,
  iconLeft,
  iconRight,
  appearance = 'solid',
  enterchannel,
  submit,
  maincreate,
  channelid,
  minicreate,
  className,
  form,
  ...rest
}) => {
  const styled = classNames(
    'button',
    className,
    `is-${size}`,
    full && 'w-full',
    `is-${appearance}`,
    iconLeft && 'is-icon-left',
    iconRight && 'is-icon-right',
    enterchannel && 'enterchannel',
    maincreate && 'hp-createchannel',
    channelid && 'channel-id',
    minicreate && 'minicreate',
    form && 'chat-submit',
  );

  const icons = {
    users: <UsersIcon />,
    duplicate: <DuplicateIcon />,
  };

  return (
    <button
      {...rest}
      type={submit ? 'submit' : 'button'}
      className={styled}
    >
      {iconLeft && icons[iconLeft]}

      {label}

      {iconRight && icons[iconRight]}
    </button>
  );
};

export default Button;
