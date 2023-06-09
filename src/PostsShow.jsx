
export function PostsShow(props) {
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params)

  };

  const handleDestroyPost = () => {
    props.onDestroyPost(props.post.id);
  };

  console.log(props.post) 
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>
       {props.post.body}
      </p>

      <form onSubmit={handleSubmit}>
        <p>Title: <input name="title" type="text" defaultValue={props.post.title} /></p>
        <p>Body: <input name="body" type="text" defaultValue={props.post.body} /></p>
        <p>Image: <input name="image" type="text" defaultValue={props.post.image} /></p>
        <p><button type="input">Update Post</button></p>
      </form>
      <br></br>
      <button onClick={handleDestroyPost}>Delete Post</button>
    </div>
  );
}