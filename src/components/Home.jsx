import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Resource could not be located...");
          }
          return res.json();
        })
        .then((data) => {
          /* console.log(data); */
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          /* console.log(err.message); */
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>Loading data...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
