import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  // let data;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add abort controller
    const abortController = new AbortController();

    // Simulate data loading delay
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Resource could not be located...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          localStorage.setItem("blogs", JSON.stringify(data));
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err !== "AbortError") {
            setError(err.message);
            setIsLoading(false);
          }
        });
    }, 1000);

    // Fire abort controller when fetch is interrupted
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
