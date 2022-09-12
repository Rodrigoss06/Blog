import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Perfil from "./components/Perfil/Perfil";
import Search from "./components/Articles/Search";
import Articles from "./components/Articles/Articles";
import Copyright from "./components/Copyright/Copyright";
import Article1 from "./components/Article(X)/Article(1)";
import Article2 from "./components/Article(X)/Article(2)";
import { BrowserRouter as Router, useParams, Routes, Route, Link } from "react-router-dom";


function Blog() {
  const params = useParams();

  console.log(params)
  return(
    <h2>UserId is {params.blogId}</h2>
  )
  console.log(blogId)
}

function Resumen() {
  return(
    <div>
        <Navbar />
        <Perfil />
        <Search />
        <Articles />
        <Copyright />
    </div>
  )
  
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Resumen/>}/>
        <Route path="/blog/00001" element={<Article1 id="01"/>}>
          
        </Route>
        <Route path="/blog/00002" element={<Article2 id="02"/>}>
        
        </Route>
      </Routes>
    </div>
  );
}
