import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  IFollowersTypes,
} from "./IFollowersAction";
export function FollowUserAction(
  id: string,
  currentId: string
): IFollowersTypes {
  return {
    type: FOLLOW_USER,
    payload: { id, currentId },
  };
}

export function UnFollowUserAction(
  id: string,
  currentId: string
): IFollowersTypes {
  return {
    type: UNFOLLOW_USER,
    payload: { id, currentId },
  };
}
