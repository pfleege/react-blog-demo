import Logo from "../images/bannerLogoVintage.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navLogo" src={Logo} alt="Blog page logo" />
      <h1>Samuel L. Blogson</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
