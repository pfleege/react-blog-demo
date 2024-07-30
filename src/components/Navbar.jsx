import Logo from "../images/bannerLogoVintage.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navLogo" src={Logo} alt="Blog page logo" />
      <h1>Samuel L. Blogson</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">Add Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
