import { Link } from "react-router-dom";
import ResetList from "./ResetList";

const BlogList = ({ blogs }) => {
  // console.log(`Inside BlogList: ${blogs}`);
  return (
    <div className="blogList">
      {blogs.map((blog) => {
        return (
          <div className="blogPreview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>
                <small>{blog.author}</small>
              </p>
              <p>
                <q>{blog.blogText.slice(0, 100)}...</q>
              </p>
            </Link>
          </div>
        );
      })}
      <button onClick={ResetList}>Reset</button>
    </div>
  );
};

export default BlogList;
