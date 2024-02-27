import { NextPage } from "next";

import useSWR from "swr";

const Count: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR("/api/visitors", fetcher);
  if (!isLoading) {
    console.log("is Loading ...");
    if (data) console.log(data.json());
    else console.log("Error 5 " + error);
  }
  return <p>here</p>;
};
export { Count };
