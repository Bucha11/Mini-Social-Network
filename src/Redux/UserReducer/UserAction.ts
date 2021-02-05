import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  IUserTypes,
  CHANGE_NAME,
} from "./IUserAction";
export function FollowUserAction(id: string): IUserTypes {
  return {
    type: FOLLOW_USER,
    payload: id,
  };
}

export function DeletePostAction(id: string): IUserTypes {
  return {
    type: UNFOLLOW_USER,
    payload: id,
  };
}

export function ChangeNameAction(id: string): IUserTypes {
  return {
    type: CHANGE_NAME,
    payload: id,
  };
}
