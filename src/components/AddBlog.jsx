import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [blogText, setBlogText] = useState("");
  const [author, setAuthor] = useState("Samuel L. Blogson");
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

  return (
    <div className="blogTemplate">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={blogText}
          onChange={(evt) => setBlogText(evt.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(evt) => setAuthor(evt.target.value)}>
          <option value="Samuel L. Blogson">Samuel L Blogson</option>
          <option value="Vincent">Vincent the Man</option>
          <option value="Mr. Wolf">Mr. Wolf</option>
          <option value="Jimmie">Jimmie T Arantino</option>
          <option value="Mia">Mia Wallace</option>
          <option value="Mr. Glass">Mr. Glass</option>
        </select>
        {!isSaving && <button>Add Blog</button>}
        {isSaving && (
          <button className="disabled" disabled>
            Saving blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddBlog;
