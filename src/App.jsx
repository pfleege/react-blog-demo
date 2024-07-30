import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import IndividualBlog from "./components/IndividualBlog";

function App() {
  return (
    <BrowserRouter>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<AddBlog />} />
            <Route path="/blogs/:id" element={<IndividualBlog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
