import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <SearchBar />
    </div>
  );
};

export default App;
