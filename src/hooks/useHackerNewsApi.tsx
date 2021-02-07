import { useEffect, useReducer, useState } from "react";
import axios from "axios";

type Data = {
  hits: {
    url: string;
    title: string;
  }[];
};
type UseHackerNewsApi = [
  { isLoading: boolean; isError: boolean; data: Data },
  (value: ((prevState: string) => string) | string) => void // useState 的类型声明
];

const useHackerNewsApi: (
  initialUrl: string,
  initialData: Data
) => UseHackerNewsApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetch();
  }, [url]);
  return [{ data, isLoading, isError }, setUrl];
};
export default useHackerNewsApi;
