import "./styles/App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <h1>Blog Content</h1>
        </div>
      </div>
    </>
  );
}

export default App;
