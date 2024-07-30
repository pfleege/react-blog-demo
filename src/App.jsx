import "./styles/App.css";
import Navbar from "./components/Navbar";
/* import Home from "./components/Home"; */
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <NotFound />
        </div>
      </div>
    </>
  );
}

export default App;
