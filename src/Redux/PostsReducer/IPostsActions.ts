export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";

export interface IAddPost {
  type: typeof ADD_POST;
  payload: {
    id: string;
    author: string;
    text: string;
  };
}

export interface IDeletePost {
  type: typeof DELETE_POST;
  payload: { id: string; author: string };
}

export interface ILikePost {
  type: typeof LIKE_POST;
  payload: { id: string; author: string };
}

export type IPostsTypes = IAddPost | IDeletePost | ILikePost;
