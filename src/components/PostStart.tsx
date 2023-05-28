import React, { useState, ChangeEvent, FormEvent } from "react";
import MyButton from "./MyButton/MyButton";

interface PostStartProps {
  create: (newPost: Post) => void;
}

interface Post {
  title: string;
  id: number;
  complete: boolean;
}

const PostStart: React.FC<PostStartProps> = ({ create }) => {
  const [title, setTitle] = useState("");

  const addPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      const newPost: Post = {
        title,
        id: Date.now(),
        complete: false,
      };
      create(newPost);
      setTitle("");
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={addPost}>
        <input
          className="input"
          placeholder="What needs to be done?"
          value={title}
          type="text"
          onChange={handleTitleChange}
        />
        <MyButton type="submit">Add notes</MyButton>
      </form>
    </div>
  );
};

export default PostStart;
