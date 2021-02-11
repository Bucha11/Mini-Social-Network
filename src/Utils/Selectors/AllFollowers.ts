import { IGroupFollowers } from "./../../Redux/InitialState/IInitialState/IGroupFollowers";
import { RootState } from "./../../Redux/Store";
export const AllFollowers = (state: RootState): IGroupFollowers =>
  state.followers;
