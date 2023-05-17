export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index" className="mt-4">
      <center>
        <h1>All Posts</h1>
      </center>
      <div className="row">
        {props.posts.map((post) => (
          <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
            <div className="card h-100">
              <div className="card-body card-body-custom d-flex flex-column">
                <h4 className="card-title">{post.title}</h4>
                <img
                  src={
                    post.image ||
                    "https://t3.ftcdn.net/jpg/02/62/89/56/360_F_262895694_ZTEujfCykcG2vJoA0UVgZIPK1dTMlc9B.jpg"
                  }
                  alt="Post Image"
                  className="mb-3"
                />
                <br></br>
                <p className="card-text">{post.body}</p>
                  <div className="mt-auto text-center">
                    <button
                      className="red-button"
                      onClick={() => {
                        props.onShowPost(post);
                      }}
                    >
                      Read More
                    </button>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

