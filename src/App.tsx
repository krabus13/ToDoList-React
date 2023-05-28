import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import PostList from "./components/PostList";
import PostStart from "./components/PostStart";
import DownBar from "./components/DownBar";
import IPost from "./Icomplete";

const App: React.FC = () => {
  const [post, setPost] = useState<IPost[]>(() => {
    const localData = localStorage.getItem("post");
    return localData ? JSON.parse(localData) : [];
  });

  const [filter, setFilter] = useState("all");
  const [completed, setCompleted] = useState<number>(0);

  useEffect(() => {
    const unCompleted = post.filter((p: IPost) => !p.complete);
    setCompleted(unCompleted.length);
  }, [post]);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(post));
  }, [post]);

  const checkComplete = (postId: number) => {
    setPost((p) =>
      p.map((post) =>
        post.id === postId ? { ...post, complete: !post.complete } : post
      )
    );
  };

  const createPost = (newpost: IPost) => {
    setPost([...post, newpost]);
  };

  const removePost = (postToDelete: IPost) => {
    setPost(post.filter((post) => post.id !== postToDelete.id));
  };

  const filteredPosts = post.filter((post) => {
    if (filter === "all") return true;
    if (filter === "active") return !post.complete;
    if (filter === "completed") return post.complete;
    return true;
  });

  const removeSelected = () => {
    setPost((p) => p.filter((p) => !p.complete));
  };

  return (
    <div className="App">
      <PostStart create={createPost} />

      <PostList
        checkComplete={checkComplete}
        remove={removePost}
        post={filteredPosts}
      />
      <DownBar
        post={post}
        removeSelected={removeSelected}
        filter={filter}
        setFilter={setFilter}
        completed={completed}
      />
    </div>
  );
};

export default App;
