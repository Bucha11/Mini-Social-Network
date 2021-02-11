import { IGroupLikes } from "./../../Redux/InitialState/IInitialState/IGroupLikes";
import { RootState } from "./../../Redux/Store";
export const AllLikes = (state: RootState): IGroupLikes => state.likes;
