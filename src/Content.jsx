import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log('in handle index posts');
    // make my web request to api to get data from rails app
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <Modal show={true}>
        <p>I am a modal</p>
      </Modal>
    </div>
  );
}
