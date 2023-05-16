export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index" className="mt-4">
      <h1>All Posts</h1>
      <div className="row">
        {props.posts.map((post) => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card h-100">
              <div className="card-body card-body-custom">
                <h5 className="card-title">{post.title}</h5>
                <img
                  src={
                    post.image ||
                    "https://t3.ftcdn.net/jpg/02/62/89/56/360_F_262895694_ZTEujfCykcG2vJoA0UVgZIPK1dTMlc9B.jpg"
                  }
                  alt = "Post Image"
                  className="mb-3"
                />
                <br></br>
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

