import {
  RegionalEmployContainer,
  RouterTransitionProvider,
} from "@/features/regionalEmploy";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default function Home({ searchParams }: Props) {
  return (
    <RouterTransitionProvider>
      <RegionalEmployContainer searchParams={searchParams} />
    </RouterTransitionProvider>
  );
}
