const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetcher = async <T>(
  endpoint: string,
  { headers, ...options }: RequestInit = {},
): Promise<{ result: T }> => {
  // loadingの挙動確認のためにあえて指定
  await sleep(2000);
  const url = new URL(endpoint, "https://opendata.resas-portal.go.jp/api/v1/");
  const res = await fetch(url, {
    headers: { "X-API-KEY": process.env.RESAS_API_KEY ?? "", ...headers },
    ...options,
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};
