import { Link } from "react-router-dom";
  
function ArticlesCard({article}) {
    const id = "/blog/"
    
    return(
        <div className="bg-gray-800 text-white p-4  m-3">
            <Link to={id + article.id} className="text-2xl font-bold capitalize">{article.title}</Link>
            <p className="text-gray-500 text-sm">{article.fecha}</p>
            <p>{article.description}</p>
            <p id="_id">{article.id}</p>
        </div>
    )
}

export default ArticlesCard