import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { fetcher } from "@/lib/fetcher";
import { RegionalEmploy } from "@/features/regionalEmploy";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

const getRegionalEmploy = (params: string) =>
  fetcher<RegionalEmploy | undefined>(
    `regionalEmploy/analysis/portfolio?${params}`,
  );

export const RegionalEmployTable = async ({ searchParams }: Props) => {
  const params = new URLSearchParams();
  params.set("prefCode", searchParams.prefCode ?? "1");
  params.set("year", searchParams.year ?? "2012");
  params.set("matter", searchParams.matter ?? "1");
  params.set("class", searchParams.class ?? "1");

  const { result: regionalEmploy } = await getRegionalEmploy(params.toString());

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>職業分類名</TableHead>
          <TableHead>求人・求職者数</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {regionalEmploy ? (
          regionalEmploy.data.map(({ broadName, value }) => (
            <TableRow key={broadName}>
              <TableCell>{broadName}</TableCell>
              <TableCell>{value?.toLocaleString() ?? 0}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>該当するデータが存在しません</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
