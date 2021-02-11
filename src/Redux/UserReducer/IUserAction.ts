export const CHANGE_NAME = "CHANGE_NAME";
export const LOGIN_IN = "LOGIN_IN";

interface IChangeName {
  type: typeof CHANGE_NAME;
  payload: { newName: string; currentId: string };
}

interface IloginInAction {
  type: typeof LOGIN_IN;
  payload: string;
}

export type IUserTypes = IChangeName | IloginInAction;
