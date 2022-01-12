import { HTMLAttributes } from 'react';

import {
  UsersIcon, UserIcon, DuplicateIcon, LockClosedIcon,
} from '@heroicons/react/outline';
import { LogoutIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  full?: boolean,
  size?: 'sm' | 'md',
  label: string | number,
  iconLeft?: 'users' | 'user' | 'lock' | 'login',
  iconRight?: 'duplicate',
  appearance?: 'outline' | 'solid';
  submit?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  full = false,
  size = 'md',
  label,
  iconLeft,
  iconRight,
  appearance = 'solid',
  submit,
  className,
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
  );

  const icons = {
    users: <UsersIcon />,
    duplicate: <DuplicateIcon />,
    user: <UserIcon />,
    lock: <LockClosedIcon />,
    login: <LogoutIcon />,

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
