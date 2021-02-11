import { ILikesTypes, LIKE_POST, UNLIKE_POST } from "./ILikesActions";

export function LikePostAction(id: string, authorId: string): ILikesTypes {
  return {
    type: LIKE_POST,
    payload: { id, authorId },
  };
}

export function UnLikePostAction(id: string, authorId: string): ILikesTypes {
  return {
    type: UNLIKE_POST,
    payload: { id, authorId },
  };
}
