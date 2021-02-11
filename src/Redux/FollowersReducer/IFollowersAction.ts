export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

interface IFollowUser {
  type: typeof FOLLOW_USER;
  payload: { id: string; currentId: string };
}

interface IUnfollowUser {
  type: typeof UNFOLLOW_USER;
  payload: { id: string; currentId: string };
}

export type IFollowersTypes = IFollowUser | IUnfollowUser;
