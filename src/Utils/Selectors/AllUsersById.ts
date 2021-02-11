import { IGroupUsers } from "./../../Redux/InitialState/IInitialState/IGroupUsers";
import { RootState } from "./../../Redux/Store";
export const AllUsersById = (state: RootState): IGroupUsers => state.users.byId;
