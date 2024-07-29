import notFoundImg from "../images/resourceNotFound.jpg";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Sorry! Despite thorough searching...</h2>
      <img src={notFoundImg} alt="" />
      <p>...I came up with a whole lot of nothing...</p>
    </div>
  );
};

export default NotFound;
