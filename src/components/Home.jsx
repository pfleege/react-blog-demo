import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log("useEffect ran...");
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Homepage</h2>
    </div>
  );
};

export default Home;
