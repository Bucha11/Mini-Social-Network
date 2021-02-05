import { Utils } from "./../../Utils/Utils";
import { IInitialState } from "./../InitialState/IInitialState";
import { LOGIN_IN } from "./ILoginActions";
import { ILoginTypes } from "./ILoginActions";
import { initialState } from "./../InitialState/InitialState";

function checkName(state: IInitialState, action: ILoginTypes) {
  const users = state.users.byId;
  let newId = Utils.getNewUserId();

  for (let key in users) {
    if (users[key].name === action.payload) {
      return {
        ...state,
        currentUser: key,
      };
    }
  }
  return {
    ...state,
    users: {
      byId: { ...state.users.byId, newId: { id: newId, name: action.payload } },
      allIds: [...state.users.allIds, newId],
    },
    currentUser: newId,
  };
}

export function LoginReducer(state = initialState, action: ILoginTypes) {
  switch (action.type) {
    case LOGIN_IN:
      return checkName(state, action);

    default:
      return state;
  }
}
