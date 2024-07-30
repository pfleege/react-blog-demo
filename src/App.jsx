import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
