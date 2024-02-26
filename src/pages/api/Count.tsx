import { NextPage } from "next";

import { useEffect, useState } from "react";
import useSWR from "swr";

const Count: NextPage = () => {
  const [dataVisitors, setDataVisitors] = useState<number>();
  const fetcher = (url: string) => fetch(url).then((data) => data.json());
  const { data, error } = useSWR("/api/visitors", fetcher);

  let visCou: Number;
  const handleUpdate = async () => {
    const id = 1;
    const data = await fetch(`/api/visitors?${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count: 90 }),
    });
  };
  handleUpdate();

  return <p>{dataVisitors}</p>;
};
export { Count };
