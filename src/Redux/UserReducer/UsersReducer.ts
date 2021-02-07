import { Utils } from "./../../Utils/Utils";
import { ADD_POST, DELETE_POST } from "./../PostsReducer/IPostsActions";
import {
  IUserTypes,
  FOLLOW_USER,
  UNFOLLOW_USER,
  CHANGE_NAME,
  LOGIN_IN,
} from "./IUserAction";
import { initialState } from "./../InitialState/InitialState";

const UserInitialState = initialState.users;

export function UserReducer(state = UserInitialState, action: IUserTypes) {
  switch (action.type) {
    case FOLLOW_USER: {
      const { id, currentId } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [currentId]: {
            ...state.byId[currentId],
            following: [...state.byId[currentId].following, id],
          },
          [id]: {
            ...state.byId[id],
            followers: [...state.byId[id].followers, currentId],
          },
        },
      };
    }
    case UNFOLLOW_USER: {
      const { id, currentId } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [currentId]: {
            ...state.byId[currentId],
            following: state.byId[currentId].following.filter(
              (i: string) => i !== id
            ),
          },
          [id]: {
            ...state.byId[id],
            followers: state.byId[id].followers.filter(
              (i: string) => i !== currentId
            ),
          },
        },
      };
    }

    case CHANGE_NAME: {
      const { currentId, newName } = action.payload;
      const users = state.byId;
      for (let key in users) {
        if (users[key].name !== newName) {
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
    case ADD_POST: {
      const { id, author } = action.payload;
      return {
        ...state,

        byId: {
          ...state.byId,
          [author]: {
            ...state[author],
            posts: [...state[author].posts, id],
          },
        },
      };
    }
    case DELETE_POST: {
      const { id, author } = action.payload;
      return {
        ...state,

        byId: {
          ...state.byId,
          [author]: {
            ...state[author],
            posts: state[author].posts.filter((i: string) => i !== id),
          },
        },
      };
    }

    case LOGIN_IN:
      const users = state.byId;
      let newId = Utils.getNewUserId();
      const loginName = action.payload;

      for (let key in users) {
        if (users[key].name === loginName) {
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
            id: newId,
            name: loginName,
            posts: [],
            followers: [],
            following: [],
          },
        },
        allIds: [...state.allIds, newId],

        currentUser: newId,
      };

    default:
      return state;
  }
}
