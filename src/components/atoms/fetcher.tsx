import { JSX, Suspense, use } from "react";

type FetcherProps<T> = {
  data: Promise<T>;
  children: (data: T) => React.ReactNode;
  fallback?: JSX.Element;
};

const Underlying = <T,>(props: FetcherProps<T>) =>
  props.children(use(props.data));

export function Fetcher<T>(props: FetcherProps<T>) {
  return (
    <Suspense fallback={props.fallback ?? <div>Loading...</div>}>
      <Underlying {...props} />
    </Suspense>
  );
}
