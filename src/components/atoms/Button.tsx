import React, { ReactNode, ButtonHTMLAttributes, memo } from 'react';

type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  const style = `rounded shadow transition px-4 py-2 hover:scale-105 active:scale-95 ${className}`;

  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
};

export default memo(Button);
