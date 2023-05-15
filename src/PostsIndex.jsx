export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="row">
        {props.posts.map((post) => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <img
                  src={
                    post.image ||
                    "https://t3.ftcdn.net/jpg/02/62/89/56/360_F_262895694_ZTEujfCykcG2vJoA0UVgZIPK1dTMlc9B.jpg"
                  }
                />
                <p className="card-text">{post.body}</p>
                <p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      props.onShowPost(post);
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

