import React from 'react';
import classNames from 'classnames';

interface InputProps {
  type?: boolean;
  placeholder?: string;

}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
}) => {
  const input = classNames();
};

export default Input;
