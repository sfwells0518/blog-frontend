export function PostsShow(props) {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p><b>body:</b> {props.post.body}</p>
      <p><b>created at:</b> {props.post.created_at}</p>
    </div>
  );
};