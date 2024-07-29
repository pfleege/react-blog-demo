import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BlogList from "./components/BlogList";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <Home />
          <BlogList />
        </div>
      </div>
    </>
  );
}

export default App;
