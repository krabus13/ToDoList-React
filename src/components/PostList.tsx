import React from "react";
import Post from "./Post";
import IPost from "../Icomplete";

interface PostListProps {
  post: IPost[];
  remove: (post: IPost) => void;
  checkComplete: (postId: number) => void;
}

const PostList: React.FC<PostListProps> = ({ post, remove, checkComplete }) => {
  return (
    <div>
      {post.map((post) => (
        <Post
          key={post.id}
          checkComplete={checkComplete}
          remove={remove}
          post={post}
        />
      ))}
    </div>
  );
};
export default PostList;
