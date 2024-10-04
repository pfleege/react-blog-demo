import "./styles/App.css";
import Navbar from "./components/Navbar";
/* import Start from "./components/Start"; */
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBlogLocal from "./components/AddBlogLocal";
import IndividualBlog from "./components/IndividualBlog";
import NotFound from "./components/NotFound";
import Footnote from "./components/Footnote";

function App() {
  return (
    <BrowserRouter>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<AddBlogLocal />} />
            <Route path="/blogs/:id" element={<IndividualBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footnote />
      </div>
    </BrowserRouter>
  );
}

export default App;
