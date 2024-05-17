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

const CLASSES = [
  { label: "職業大分類で見る", value: "1" },
  { label: "職業中分類で見る", value: "2" },
];

export const ClassSelect = () => {
  const handleChange = useChangeParams("class");
  const { isPending } = useRouterTransition();

  return (
    <Select defaultValue={CLASSES[0].value} onValueChange={handleChange}>
      <SelectTrigger disabled={isPending}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {CLASSES.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
