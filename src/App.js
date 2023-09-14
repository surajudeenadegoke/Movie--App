import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="container">
      <div className="header-content">
        <Header />
        <SearchBar />
      </div>
      <Movies />
      <Footer/>
    </div>
  );
};

export default App;
