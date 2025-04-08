import { useEffect, useState } from "react";

export const usefetch = <T>(
  fetchfuntion: () => Promise<T>,
  autofetch: boolean = true
) => {
  const [data, setdata] = useState<T | null>(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<Error | null>(null);
  const fetchdata = async () => {
    try {
      setloading(true);
      const data = await fetchfuntion();
      setdata(data);
    } catch (error) {
      seterror(
        error instanceof Error ? error : new Error("something went wrong")
      );
    } finally {
      setloading(false);
    }
  };

  //   reset funtion
  const reset = () => {
    setdata(null);
    setloading(false);
    seterror(null);
  };
  useEffect(() => {
    if (autofetch) {
      fetchdata();
    }
  }, []);
  return { data, loading, error, reset, refetch: fetchdata };
};
