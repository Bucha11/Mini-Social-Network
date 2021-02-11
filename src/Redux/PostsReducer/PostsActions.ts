import { Utils } from "./../../Utils/Utils";

import { ADD_POST, IPostsTypes, DELETE_POST } from "./IPostsActions";
export function AddPostAction(authorId: string, postText: string): IPostsTypes {
  const postId = Utils.getNewPostId();
  return {
    type: ADD_POST,
    payload: {
      postId,
      authorId,
      postText,
    },
  };
}

export function DeletePostAction(
  postId: string,
  authorId: string
): IPostsTypes {
  return {
    type: DELETE_POST,
    payload: { postId, authorId },
  };
}
