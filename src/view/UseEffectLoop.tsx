import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectLoop = () => {
  const [data, setData] = useState<null | object>(null);
  const fetchData = async () => {
    const result = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=redux"
    );
    console.log(result);
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, [data]);
  return <div>UseEffect</div>;
};

export default UseEffectLoop;
