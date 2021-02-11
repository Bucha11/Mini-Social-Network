import React from "react";
import { IFullPost } from "../../Utils/Selectors/IFullpost";

export const Post = (props: IFullPost) => {
  const LikesList = props.likes.map((i) => {
    return <div key={i.userLikeId}>{i.userLikeName}</div>;
  });
  debugger;
  return (
    <div>
      <div>{props.authorName}</div>
      <div> {props.postText}</div>
      <div>
        Понравилось:
        {LikesList}
      </div>
    </div>
  );
};
