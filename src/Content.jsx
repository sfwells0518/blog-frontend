import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('in handle index posts');
    // make my web request to api to get data from rails app
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (myPost) => {
    setIsPostsShowVisible(true);
    setCurrentPost(myPost)
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p><b>title:</b> {currentPost.title}</p>
        <p><b>body:</b> {currentPost.body}</p>
        <p><b>created at:</b> {currentPost.created_at}</p>
      </Modal>
    </div>
  );
}
