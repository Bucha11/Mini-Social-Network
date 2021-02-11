import {
  IFollowersTypes,
  FOLLOW_USER,
  UNFOLLOW_USER,
} from "./IFollowersAction";
import { initialState } from "./../InitialState/InitialState";

const UserInitialState = initialState.followers;

export function FollowersReducer(
  state = UserInitialState,
  action: IFollowersTypes
) {
  switch (action.type) {
    case FOLLOW_USER: {
      const { id, currentId } = action.payload;
      return {
        ...state,
        [currentId + "-" + id]: {
          userId: currentId,
          followersId: id,
        },
      };
    }
    case UNFOLLOW_USER: {
      const { id, currentId } = action.payload;
      const { [currentId + "-" + id]: _, ...newPosts } = state;
      return {
        state: newPosts,
      };
    }

    default:
      return state;
  }
}
