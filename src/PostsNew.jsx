export function PostsNew() {
  return (
    <div id="posts-new">

      <h2>New post</h2>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <br></br>

        <button type="submit">Create Post</button>
      </form>
      <br></br>
      
    </div>
  );
}
