import { IGroupUsers } from "./../IInitialState/IGroupUsers";
export interface IUsers {
  [x: string]: any;
  byId: IGroupUsers;
  allIds: Array<string>;
  currentUser: string;
}
