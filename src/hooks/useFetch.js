import { useEffect, useState } from "react";
import api from "../services/api";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Data = async () => {
      try {
        const response = await api.get(url);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    Data();
  }, [url]);

  return [data];
};
