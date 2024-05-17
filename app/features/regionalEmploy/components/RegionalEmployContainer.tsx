import { PrefecturesSelectContainer } from "@/features/prefectures";
import { ClassSelect } from "./ClassSelect";
import { MatterSelect } from "./MatterSelect";
import { RegionalEmployTable } from "./RegionalEmployTable";
import { TransitionContainer } from "./TransitionContainer";
import { YearSelect } from "./YearSelect";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export const RegionalEmployContainer = ({ searchParams }: Props) => {
  return (
    <div className="grid gap-10 p-10 max-w-[1000px] mx-auto">
      <h1 className="text-4xl font-bold">求人・求職者</h1>

      <div className={"flex flex-row-reverse items-start gap-10"}>
        <TransitionContainer>
          <RegionalEmployTable searchParams={searchParams} />
        </TransitionContainer>

        <aside className="grid gap-6 w-[30%]">
          <PrefecturesSelectContainer />
          <YearSelect />
          <MatterSelect />
          <ClassSelect />
        </aside>
      </div>
    </div>
  );
};
