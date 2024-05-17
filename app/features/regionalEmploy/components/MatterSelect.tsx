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

const MATTERS = [
  { label: "有効求職者数（総数）", value: "1" },
  { label: "有効求職者数（男性）", value: "2" },
  { label: "有効求職者数（女性）", value: "3" },
  { label: "有効求人数", value: "4" },
  { label: "就職件数", value: "5" },
];

export const MatterSelect = () => {
  const handleChange = useChangeParams("matter");
  const { isPending } = useRouterTransition();

  return (
    <Select defaultValue={MATTERS[0].value} onValueChange={handleChange}>
      <SelectTrigger disabled={isPending}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {MATTERS.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
