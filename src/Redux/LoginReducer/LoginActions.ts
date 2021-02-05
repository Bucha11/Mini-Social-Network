import { ILoginTypes, LOGIN_IN } from "./ILoginActions";
export function LoginAction(name: string): ILoginTypes {
  return {
    type: LOGIN_IN,
    payload: name,
  };
}
