const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => {
        return (
          <div className="blogPreview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
