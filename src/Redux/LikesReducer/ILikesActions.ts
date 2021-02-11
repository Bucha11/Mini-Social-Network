export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

export interface ILikePost {
  type: typeof LIKE_POST;
  payload: { id: string; authorId: string };
}

export interface IUnLikePost {
  type: typeof UNLIKE_POST;
  payload: { id: string; authorId: string };
}

export type ILikesTypes = IUnLikePost | ILikePost;
