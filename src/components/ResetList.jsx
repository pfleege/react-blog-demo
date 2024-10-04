/* import { useEffect } from "react"; */

const ResetList = () => {
  fetch("../src/data/blogs-backup.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    });

  /* // Fetch each remaining id in json -file
// Map through it and use it in the handleDelete -function
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
        }).then(() => {
          navigate("/");
        });
      }; */

  // Use addBlog to populate the json -file with data from original file
  /* 
const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [blogText, setBlogText] = useState("");
    const [author, setAuthor] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      setIsSaving(true);
  
      const url = "http://localhost:8000/blogs";
      const newBlog = { title, blogText, author };
  
      setTimeout(() => {
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlog),
          mode: "cors",
        }).then(() => {
          setIsSaving(false);
        });
      }, 1000);
      navigate("/");
    };
  };*/
};

export default ResetList;
