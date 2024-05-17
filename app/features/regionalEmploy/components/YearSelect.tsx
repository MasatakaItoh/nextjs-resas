"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import {
  useChangeParams,
  useRouterTransition,
} from "@/features/regionalEmploy";

const YEARS = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];

export const YearSelect = () => {
  const handleChange = useChangeParams("year");
  const { isPending } = useRouterTransition();

  return (
    <Select defaultValue={YEARS[0]} onValueChange={handleChange}>
      <SelectTrigger disabled={isPending}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {YEARS.map((x) => (
          <SelectItem key={x} value={x}>
            {x}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
