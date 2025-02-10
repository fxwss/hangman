import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

type ButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles = tv({
  base: "rounded shadow transition px-4 py-2 hover:scale-105 active:scale-95",
});

export const Button = ({ children, ...props }: ButtonProps) => (
  <button {...props} className={styles(props)}>
    {children}
  </button>
);
