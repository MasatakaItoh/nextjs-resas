type RegionalEmployData = {
  broadCode: string;
  broadName: string;
  middleCode: string;
  middleName: string;
  value: number | null;
};

export type RegionalEmploy = {
  prefCode: string;
  prefName: string;
  year: string;
  matter: string;
  class: string;
  data: RegionalEmployData[];
  allcount: number;
  otherscount: number;
};
