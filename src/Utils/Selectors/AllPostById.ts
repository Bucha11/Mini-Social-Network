import { IGroupPosts } from "./../../Redux/InitialState/IInitialState/IGroupPosts";
import { RootState } from "./../../Redux/Store";
export const AllPostById = (state: RootState): IGroupPosts => state.posts.byId;
