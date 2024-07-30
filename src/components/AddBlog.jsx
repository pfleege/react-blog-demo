const AddBlog = () => {
  return (
    <div className="blogTemplate">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        <label>Blog body:</label>
        <textarea required></textarea>
        <label>Blog author:</label>
        <select>
          <option value="Samuel L. Blogson">Samuel L Blogson</option>
          <option value="Vincent">Vincent the Man</option>
          <option value="Mr. Wolf">Mr. Wolf</option>
          <option value="Jimmie">Jimmie T Arantino</option>
          <option value="Mia">Mia Wallace</option>
          <option value="Mr. Glass">Mr. Glass</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
