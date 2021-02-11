import React from "react";
import { useSelector } from "react-redux";
import { FeedPostsWithLikes } from "../../../Utils/Selectors/FeedPostsWithLikes";

import { Post } from "../../Post/Post";

export const FollowFeed = () => {
  const FeedPostsArray = useSelector(FeedPostsWithLikes);
  const RenderFollowFeed = FeedPostsArray.map((i) => {
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
  return <div>{RenderFollowFeed}</div>;
};
