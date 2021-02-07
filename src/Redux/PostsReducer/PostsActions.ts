import { Utils } from "./../../Utils/Utils";

import { ADD_POST, IPostsTypes, DELETE_POST, LIKE_POST } from "./IPostsActions";
export function AddPostAction(author: string, text: string): IPostsTypes {
  const id = Utils.getNewPostId();
  return {
    type: ADD_POST,
    payload: {
      id,
      author,
      text,
    },
  };
}

export function DeletePostAction(id: string, author: string): IPostsTypes {
  return {
    type: DELETE_POST,
    payload: { id, author },
  };
}

export function LikePostAction(id: string, author: string): IPostsTypes {
  return {
    type: LIKE_POST,
    payload: { id, author },
  };
}
