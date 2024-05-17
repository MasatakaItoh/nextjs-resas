"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

export type RouterTransitionContext = {
  isPending: boolean;
  setIsPending: (isLoading: boolean) => void;
};

const RouterTransitionContext = createContext<RouterTransitionContext>({
  isPending: false,
  setIsPending: () => {},
});

export const RouterTransitionProvider = ({ children }: PropsWithChildren) => {
  const [isPending, setIsPending] = useState(false);
  return (
    <RouterTransitionContext.Provider value={{ isPending, setIsPending }}>
      {children}
    </RouterTransitionContext.Provider>
  );
};

export const useRouterTransition = () => useContext(RouterTransitionContext);
