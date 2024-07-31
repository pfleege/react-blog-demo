import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const IndividualBlog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
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
