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
  submit?: boolean,
  disabled?: boolean,
  iconLeft?: 'users' | 'user' | 'lock' | 'login',
  iconRight?: 'duplicate',
  appearance?: 'outline' | 'solid' | 'confirm' | 'cancel';
}

const Button: React.FC<ButtonProps> = ({
  full = false,
  size = 'md',
  label,
  submit,
  disabled,
  iconLeft,
  iconRight,
  className,
  appearance = 'solid',
  ...rest
}) => {
  const styled = classNames(
    'button',
    className,
    `is-${size}`,
    full && 'w-full',
    `is-${appearance}`,
    disabled && 'is-disabled',
    iconLeft && 'is-icon-left',
    iconRight && 'is-icon-right',
  );

  const icons = {
    users: <UsersIcon />,
    user: <UserIcon />,
    lock: <LockClosedIcon />,
    login: <LogoutIcon />,
    duplicate: <DuplicateIcon />,

  };

  return (
    <button
      {...rest}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      className={styled}
    >
      {iconLeft && icons[iconLeft]}

      {label}

      {iconRight && icons[iconRight]}
    </button>
  );
};

export default Button;
