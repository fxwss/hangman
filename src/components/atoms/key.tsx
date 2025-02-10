import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const styles = tv({
  base: `
      flex transition rounded shadow-xl

      bg-gray-700
      hover:bg-gray-600
      text-white
      text-sm
      md:text-base

      hover:translate-y-[2px] active:translate-y-[4px]
      hover:shadow-md
      active:shadow-sm
      
      w-7

      border-l-4
      border-r-[1px]
      border-t-[1px]
      border-b-4
      border-gray-900

      py-4 px-2
      md:py-2 md:px-4
      
      disabled:bg-gray-400
      disabled:border-gray-300
      disabled:shadow-none
      disabled:hover:translate-y-0 disabled:active:translate-y-0
`,
});

type KeyProps = {
  children: ReactNode;
  active?: boolean;
  onClick?(): void;
};

export const Key = (props: KeyProps) => {
  return (
    <button
      onClick={() => props.active && props.onClick && props.onClick()}
      disabled={!props.active}
      className={styles(props)}
    >
      <span className="flex w-full justify-center text-center leading-none uppercase">
        {props.children}
      </span>
    </button>
  );
};
