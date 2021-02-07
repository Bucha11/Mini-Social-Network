import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  IUserTypes,
  CHANGE_NAME,
  LOGIN_IN,
} from "./IUserAction";
export function FollowUserAction(id: string, currentId: string): IUserTypes {
  return {
    type: FOLLOW_USER,
    payload: { id, currentId },
  };
}

export function UnFollowUserAction(id: string, currentId: string): IUserTypes {
  return {
    type: UNFOLLOW_USER,
    payload: { id, currentId },
  };
}

export function ChangeNameAction(
  currentId: string,
  newName: string
): IUserTypes {
  return {
    type: CHANGE_NAME,
    payload: { currentId, newName },
  };
}

export function LoginAction(name: string): IUserTypes {
  return {
    type: LOGIN_IN,
    payload: name,
  };
}
