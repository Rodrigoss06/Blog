import { createContext, useEffect, useState } from "react";
import { data as data } from "../util/data";

export const BlogContext = createContext();

export function BlogContextProvider(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(data);
  }, []);

  return (
    <>
      <BlogContext.Provider value={{ articles }}>
        {props.children}
      </BlogContext.Provider>
    </>
  );
}
