import { HangmanProvider } from "@/contexts/hagman.context";
import { PropsWithChildren } from "react";

export const providers = [HangmanProvider];

export const Providers = (props: PropsWithChildren) =>
  providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    props.children
  );
