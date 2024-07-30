import { useParams } from "react-router-dom";

const IndividualBlog = () => {
  const { id } = useParams();
  return (
    <div className="individualBlog">
      <h2>Current Blog is {id}</h2>
    </div>
  );
};

export default IndividualBlog;
