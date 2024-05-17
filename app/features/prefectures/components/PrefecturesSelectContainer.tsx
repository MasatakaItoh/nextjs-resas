import { fetcher } from "@/lib/fetcher";
import { Prefecture } from "@/features/prefectures";
import { PrefecturesSelect } from "./PrefecturesSelect";

const getPrefectures = () => fetcher<Prefecture[]>("prefectures");

export const PrefecturesSelectContainer = async () => {
  const { result: prefectures } = await getPrefectures();

  return <PrefecturesSelect prefectures={prefectures} />;
};
