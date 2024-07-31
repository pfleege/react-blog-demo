import notFoundImg from "../images/questionMark.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
        Say <q>what</q>, one more time...
      </h2>
      <img src={notFoundImg} alt="" />
      <p>...i dare you...</p>
      <div className="goToHomePage">
        <Link to="/">Back to list...</Link>
      </div>
    </div>
  );
};

export default NotFound;
