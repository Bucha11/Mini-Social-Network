export const LOGIN_IN = "LOGIN_IN";

interface IloginInAction {
  type: typeof LOGIN_IN;
  payload: string;
}

export type ILoginTypes = IloginInAction;
