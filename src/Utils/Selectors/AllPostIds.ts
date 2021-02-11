import { RootState } from "./../../Redux/Store";
export const AllPostIds = (state: RootState): Array<string> =>
  state.posts.allIds;
