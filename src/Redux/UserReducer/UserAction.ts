import { IUserTypes, CHANGE_NAME, LOGIN_IN } from "./IUserAction";

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
