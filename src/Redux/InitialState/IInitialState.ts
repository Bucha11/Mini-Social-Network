export interface IInitialState {
  users: IUsers;
  posts: IPosts;
  currentUser: string;
}

export interface IUser {
  id: string;
  name: string;
  posts: Array<string>;
  followers: Array<string>;
  following: Array<string>;
}
export interface IUsers {
  byId: IGroupUsers;
  allIds: Array<string>;
}

export interface IPosts {
  byId: IGroupPosts;
  allIds: Array<string>;
}

export interface IPost {
  id: string;
  text: string;
  author: string;
  likes: Array<string>;
}

export interface IGroupUsers {
  [key: string]: IUser;
}

export interface IGroupPosts {
  [key: string]: IPost;
}
