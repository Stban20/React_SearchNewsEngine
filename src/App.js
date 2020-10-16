import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListNews from "./components/ListNews";

function App() {
  //state to bring the category
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const askAPI = async () => {
      const apiKey = "83b942f766fc4b4a823fb4a38a2f9dfe";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      const answer = await fetch(url);
      const result = await answer.json();

      setNews(result.articles);
    };
    askAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="News Serch Engine React App" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <ListNews news={news} />
      </div>
    </Fragment>
  );
}

export default App;
