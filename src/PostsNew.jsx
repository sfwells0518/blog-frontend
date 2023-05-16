import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data);
      event.target.reset()
    })
  }

  return (
    <div id="posts-new" className="centered-content">
      <h3>New Post</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input name="title" type="text" className="form-control" id="floatingTitle" placeholder="Title" />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating mb-3">
          <input name="body" type="text" className="form-control form-control-large" id="floatingBody" placeholder="Body" />
          <label htmlFor="floatingInput">Body</label>
        </div>

        <div className="form-floating mb-3">
          <input name="image" type="text" className="form-control" id="floatingImage" placeholder="Image" />
          <label htmlFor="floatingInput">Image URL</label>
        </div>

        <button type="submit">Submit Post</button>
      </form>
      <br></br>
    </div>
  );

}
