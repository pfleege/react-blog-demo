import notFoundImg from "../images/questionMark.png";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
        Say <q>what</q>, one more time...
      </h2>
      <img src={notFoundImg} alt="" />
      <p>...i dare you...</p>
    </div>
  );
};

export default NotFound;
