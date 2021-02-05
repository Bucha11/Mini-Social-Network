export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const CHANGE_NAME = "CHANGE_NAME";

interface IFollowUser {
  type: typeof FOLLOW_USER;
  payload: string;
}

interface IUnfollowUser {
  type: typeof UNFOLLOW_USER;
  payload: string;
}

interface IChangeName {
  type: typeof CHANGE_NAME;
  payload: string;
}

export type IUserTypes = IFollowUser | IChangeName | IUnfollowUser;
