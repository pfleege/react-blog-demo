import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Start = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  /*   let blogs = [];

  setTimeout(() => {
    blogs = [...data];
  }, 500); */

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading data...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Start;
