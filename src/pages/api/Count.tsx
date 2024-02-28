import { NextPage } from "next";

import { useEffect, useState } from "react";
import useSWR from "swr";

const Count: NextPage = () => {
  const [dataVisitors, setDataVisitors] = useState<number>();
  const fetcher = (url: string) => fetch(url).then((data) => data.json());
  const { data, error, isLoading, mutate } = useSWR("/api/visitors", fetcher);

  const handleVisitorUpdate = async () => {
    const id = 1;

    const updateResponse = await fetch(`/api/visitors?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitors}),
    });
 
    mutate();
  };
  useEffect(() => {
    if (data) {
      setDataVisitors(data.count);
    }
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [data, error]);

  useEffect(() => {
    handleVisitorUpdate();
  }, []);
  return <p>{!isLoading ? " - " + dataVisitors : "Loading..."}</p>;
};
export { Count };
