import {
  IUserTypes,
  FOLLOW_USER,
  UNFOLLOW_USER,
  CHANGE_NAME,
} from "./IUserAction";
import { initialState } from "./../InitialState/InitialState";
export function UserReducer(state = initialState, action: IUserTypes) {
  switch (action.type) {
    case FOLLOW_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case CHANGE_NAME: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
}
