import { Utils } from "./../../Utils/Utils";

import { IUserTypes, CHANGE_NAME, LOGIN_IN } from "./IUserAction";
import { initialState } from "./../InitialState/InitialState";

const UserInitialState = initialState.users;

export function UserReducer(state = UserInitialState, action: IUserTypes) {
  switch (action.type) {
    case CHANGE_NAME: {
      const { currentId, newName } = action.payload;
      const users = state.byId;
      for (let key in users) {
        if (users[key].userName !== newName) {
          return {
            ...state,
            byId: {
              ...state.byId,
              [currentId]: {
                ...state.byId[currentId],
                name: newName,
              },
            },
          };
        }
      }

      return {
        ...state,
      };
    }

    case LOGIN_IN:
      const users = state.byId;
      let newId = Utils.getNewUserId();
      const loginName = action.payload;

      for (let key in users) {
        if (users[key].userName === loginName) {
          return {
            ...state,
            currentUser: key,
          };
        }
      }
      return {
        ...state,

        byId: {
          ...state.byId,
          newId: {
            userId: newId,
            userName: loginName,
          },
        },
        allIds: [...state.allIds, newId],

        currentUser: newId,
      };

    default:
      return state;
  }
}
