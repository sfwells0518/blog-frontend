export function PostsNew() {
  return (
    <div id="posts-new" className="centered-content">
      <h3>New Post</h3>
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingTitle" placeholder="Title" />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control form-control-large" id="floatingBody" placeholder="Body" />
          <label htmlFor="floatingInput">Body</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingImage" placeholder="Image" />
          <label htmlFor="floatingInput">Image URL</label>
        </div>

        <br></br>

        <button type="submit">Create Post</button>
      </form>
      <br></br>
    </div>
  );

}
