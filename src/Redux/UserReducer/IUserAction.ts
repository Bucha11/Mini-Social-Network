import {
  IAddPost,
  IDeletePost,
  ILikePost,
} from "./../PostsReducer/IPostsActions";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const CHANGE_NAME = "CHANGE_NAME";
export const LOGIN_IN = "LOGIN_IN";

interface IFollowUser {
  type: typeof FOLLOW_USER;
  payload: { id: string; currentId: string };
}

interface IUnfollowUser {
  type: typeof UNFOLLOW_USER;
  payload: { id: string; currentId: string };
}

interface IChangeName {
  type: typeof CHANGE_NAME;
  payload: { newName: string; currentId: string };
}

interface IloginInAction {
  type: typeof LOGIN_IN;
  payload: string;
}

export type IUserTypes =
  | IFollowUser
  | IChangeName
  | IUnfollowUser
  | IAddPost
  | IDeletePost
  | ILikePost
  | IloginInAction;
