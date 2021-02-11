import { RootState } from "./../../Redux/Store";
export const CurrentUser = (state: RootState): string =>
  state.users.currentUser;
