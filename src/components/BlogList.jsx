const BlogList = ({ blogs }) => {
  return (
    <div className="blogList">
      {blogs.map((blog) => {
        return (
          <div className="blogPreview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>
              <small>{blog.author}</small>
            </p>
            <p>
              <q>{blog.blogText.slice(0, 100)}...</q>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
