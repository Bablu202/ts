import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
export default function VisitersCount() {
  const [visitorsCount, setVisitorsCount] = useState<number>();

  const fetchSupa = async () => {
    const { data, error } = await supabase
      .from("visitors")
      .select("count")
      .eq("id", 1);
    if (data) {
      setVisitorsCount(data[0].count);
      updateSupa(data[0].count);
    } else {
      console.log(error);
    }
  };
  const updateSupa = async (e: number) => {
    const { error } = await supabase
      .from("visitors")
      .update({ count: e + 1 })
      .eq("id", 1);
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSupa();
  }, []);

  return (
    <div className="bg-gray-500 p-3 text-center text-xl text-white rounded-lg">
      <p>
        Number of Visitors are {visitorsCount ? visitorsCount : " Loading..."}
      </p>
    </div>
  );
}
