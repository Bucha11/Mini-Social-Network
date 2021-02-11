import { IInitialState } from "../InitialState/IInitialState/IInitialState";
export const initialState: IInitialState = {
  users: {
    byId: {},
    allIds: [],
    currentUser: "",
  },
  posts: {
    byId: {},
    allIds: [],
  },

  likes: {},

  followers: {},
};
