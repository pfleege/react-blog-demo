import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <p>Loading data...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
