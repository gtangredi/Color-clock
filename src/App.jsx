import React from "react";
import blogData from "../data/blog.js";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App () {
  return (
    <div classNAme="App">
      <Header />
      <About />
      <ArticleList />

    </div>
  );
}

export default App;


 
