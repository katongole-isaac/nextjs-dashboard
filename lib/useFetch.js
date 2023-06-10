/**
 * useFetch hook
 *
 */

import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    setIsLoading(true);

    try {
      const { data: results } = await axios.get(url);
      setData(results);

      setIsLoading(false);
    } catch (ex) {
      setError(ex.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
