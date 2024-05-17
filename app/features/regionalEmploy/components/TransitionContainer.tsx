"use client";
import { PropsWithChildren } from "react";
import { useRouterTransition } from "@/features/regionalEmploy";

export const TransitionContainer = ({ children }: PropsWithChildren) => {
  const { isPending } = useRouterTransition();
  return (
    <div className={isPending ? "opacity-50 w-full" : "w-full"}>{children}</div>
  );
};
