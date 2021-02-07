import { IUser } from "../../Redux/InitialState/IInitialState";

export interface IPostPropsTypes {
  author: string;
  text: string;
  key: string;
  likes: Array<IUser>;
}
