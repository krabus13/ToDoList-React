import React from "react";
import "..//style.css";
import MyButton from "./MyButton/MyButton";

interface PostProps {
  post: Post;
  checkComplete: (postId: number) => void;
  remove: (post: Post) => void;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    <div>
      <div className="post">
        <input
          className="checkbox"
          type="checkbox"
          checked={props.post.complete}
          onChange={() => props.checkComplete(props.post.id)}
        />
        <div className={props.post.complete ? "posttrue" : ""}>
          <div className="titles">{props.post.title}</div>
        </div>
        <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
      </div>
    </div>
  );
};
export default Post;
