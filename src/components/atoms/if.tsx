import { PropsWithChildren } from "react";

type Props = {
  condition: boolean;
};

export const If = (props: PropsWithChildren<Props>) => {
  return props.condition ? props.children : null;
};
