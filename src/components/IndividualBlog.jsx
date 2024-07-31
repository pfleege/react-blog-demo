import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const IndividualBlog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="individualBlog">
      <div className="home">
        {error && <p>{error}</p>}
        {isLoading && <p>Loading data...</p>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>
              <small>{blog.author}</small>
            </p>
            <p>{blog.blogText}</p>
            <button className="deleteBlog" onClick={handleDelete}>
              Delete blog
            </button>
            <div className="goToHomePage">
              <Link to="/">Back to list...</Link>
            </div>
          </article>
        )}
      </div>
    </div>
  );
};

export default IndividualBlog;
