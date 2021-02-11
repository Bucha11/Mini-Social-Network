import React from "react";
import { useSelector } from "react-redux";
import { AllPostsWithLikes } from "../../../Utils/Selectors/AllPostsWithLikes";

import { Post } from "../../Post/Post";

export const AllFeed = () => {
  const AllPostsArray = useSelector(AllPostsWithLikes);
  const RenderAllFeed = AllPostsArray.map((i) => {
    return (
      <Post
        authorName={i.authorName}
        authorId={i.authorId}
        postText={i.postText}
        key={i.postId}
        likes={i.likes}
        postId={i.postId}
      />
    );
  });
  return <div>{RenderAllFeed}</div>;
};
