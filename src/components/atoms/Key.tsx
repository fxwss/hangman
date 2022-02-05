import React, { memo, ReactNode } from 'react';

type KeyProps = {
  children: ReactNode;
  active?: boolean;
  onClick?(): void;
};

const KeyComponent = ({ children, active = true, onClick }: KeyProps) => {
  return (
    <button
      onClick={() => active && onClick && onClick()}
      disabled={!active}
      className="
      flex transition rounded shadow-xl

      bg-slate-600
      hover:bg-slate-500
      text-white
      text-sm
      md:text-base

      hover:translate-y-[2px] active:translate-y-[4px]
      hover:shadow-md
      active:shadow-sm
      
      w-7

      py-4 px-2
      md:py-2 md:px-4
      
      disabled:bg-slate-400
      disabled:shadow-none
      disabled:hover:translate-y-0 disabled:active:translate-y-0"
    >
      <span className="flex w-full justify-center text-center leading-none uppercase">
        {children}
      </span>
    </button>
  );
};

export default memo(KeyComponent);
