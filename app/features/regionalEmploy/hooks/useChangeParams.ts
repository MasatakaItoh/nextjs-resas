"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useTransition } from "react";
import { useRouterTransition } from "@/features/regionalEmploy";

export const useChangeParams = (
  key: "prefCode" | "year" | "matter" | "class",
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSearching, startTransition] = useTransition();
  const { setIsPending } = useRouterTransition();

  const handleChange = (v: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, v);
    startTransition(() => {
      router.push(`/?${params.toString()}`);
    });
  };

  useEffect(() => {
    setIsPending(isSearching);
  }, [isSearching]);

  return handleChange;
};
