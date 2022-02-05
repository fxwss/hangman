import React, { memo, ReactNode } from 'react';
import Fade from './Fade';

type ModalProps = {
  children: ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
};

export const Modal = ({ children, className = '' }: ModalProps) => {
  const style = `${className}`;

  return (
    <Fade>
      <div className="flex justify-center items-center left-0 top-0 w-screen h-screen">
        <div className={style}>{children}</div>
      </div>
    </Fade>
  );
};

export default memo(Modal);
