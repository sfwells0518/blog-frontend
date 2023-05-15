export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h3>{post.title}</h3>
          <img src={post.image} alt="" />
          <div>
            <button onClick={() => { props.onShowPost(post) }}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
}
