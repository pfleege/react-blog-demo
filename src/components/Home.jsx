import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const localData = localStorage.getItem("blogs");
  // console.log(`Inside Home: ${localData}`);

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading data...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
