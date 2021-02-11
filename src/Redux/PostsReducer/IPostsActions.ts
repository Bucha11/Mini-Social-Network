export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

export interface IAddPost {
  type: typeof ADD_POST;
  payload: {
    postId: string;
    authorId: string;
    postText: string;
  };
}

export interface IDeletePost {
  type: typeof DELETE_POST;
  payload: { postId: string; authorId: string };
}

export type IPostsTypes = IAddPost | IDeletePost;
