import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import ArticlesCard from "./ArticlesCard";

function Articles() {
  const { articles } = useContext(BlogContext);

  if (articles.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {articles.map((article) => (
        <ArticlesCard  article={article} />
      ))}
    </div>
  );
}
export default Articles;
