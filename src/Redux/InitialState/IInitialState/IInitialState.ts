import { IUsers } from "./../IInitialState/IUsers";
import { IPosts } from "./../IInitialState/IPosts";
import { IGroupLikes } from "./../IInitialState/IGroupLikes";
import { IGroupFollowers } from "./../IInitialState/IGroupFollowers";
export interface IInitialState {
  users: IUsers;
  posts: IPosts;
  likes: IGroupLikes;
  followers: IGroupFollowers;
}
