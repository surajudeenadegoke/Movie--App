import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import SearchBar from "./Components/SearchBar";

// const url = "http://www.omdbapi.com/?i=tt3896198&d380cfbd=d380cfbd";
const url = "http://www.omdbapi.com/?apikey=d380cfbd&t=The Shawshank Redemption"


const App = () => {
  const searchMovies = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="container">
      <div className="header-content">
        <Header />
        <SearchBar />
      </div>
      <Movies />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
