"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { Prefecture } from "@/features/prefectures";
import {
  useChangeParams,
  useRouterTransition,
} from "@/features/regionalEmploy";

type Props = {
  prefectures: Prefecture[];
};

export const PrefecturesSelect = ({ prefectures }: Props) => {
  const handleChange = useChangeParams("prefCode");
  const { isPending } = useRouterTransition();

  return (
    <Select
      defaultValue={prefectures[0].prefCode.toString()}
      onValueChange={handleChange}
    >
      <SelectTrigger disabled={isPending}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {prefectures.map(({ prefCode, prefName }) => (
          <SelectItem key={prefCode} value={prefCode.toString()}>
            {prefName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
