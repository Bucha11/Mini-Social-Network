import { DELETE_POST, IPostsTypes, ADD_POST, LIKE_POST } from "./IPostsActions";
import { initialState } from "./../InitialState/InitialState";
import { combineReducers } from "redux";

const AllPostIdInitialState = initialState.posts.allIds;
const AllPostInitialState = initialState.posts.byId;
function AllIdPostsReducer(state = AllPostIdInitialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { id: newId } = action.payload;
      return {
        ...state,
        newId,
      };
    }
    case DELETE_POST: {
      return {
        state: state.filter((i) => i !== action.payload.id),
      };
    }

    default:
      return state;
  }
}

function PostsByIdReducer(state = AllPostInitialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { id: newId, text, author } = action.payload;
      return {
        ...state,
        newId: { id: newId, text, author, likes: [] },
      };
    }
    case DELETE_POST: {
      const { payload: _, ...newPosts } = state;
      return {
        state: newPosts,
      };
    }

    case LIKE_POST: {
      let { author: postAuthor, id: postId } = action.payload;
      return {
        state: {
          ...state,
          [postId]: {
            ...state[postId],
            likes: [...state[postId].likes, postAuthor],
          },
        },
      };
    }
    default:
      return state;
  }
}

export const PostsReducer = combineReducers({
  allIds: AllIdPostsReducer,
  byId: PostsByIdReducer,
});
