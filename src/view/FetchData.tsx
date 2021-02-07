import React, { useState } from "react";
import useHackerNewsApi from "./useHackerNewsApi";

const FetchData = () => {
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, setUrl] = useHackerNewsApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );
  return (
    <>
      <form
        onSubmit={(event) => {
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {data.hits.map((item) => {
            return (
              <li key={item.url}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default FetchData;
