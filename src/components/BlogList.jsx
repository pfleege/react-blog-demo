import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
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
    </div>
  );
};

export default BlogList;
