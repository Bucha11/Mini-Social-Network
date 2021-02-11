import { IGroupPosts } from "../IInitialState/IGroupPosts";
export interface IPosts {
  byId: IGroupPosts;
  allIds: Array<string>;
}
