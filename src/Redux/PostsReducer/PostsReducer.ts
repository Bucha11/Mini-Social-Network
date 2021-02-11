import { DELETE_POST, IPostsTypes, ADD_POST } from "./IPostsActions";
import { initialState } from "./../InitialState/InitialState";
import { combineReducers } from "redux";

const AllPostIdInitialState = initialState.posts.allIds;
const AllPostInitialState = initialState.posts.byId;
function AllIdPostsReducer(state = AllPostIdInitialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { postId: newId } = action.payload;
      return {
        ...state,
        newId,
      };
    }
    case DELETE_POST: {
      return {
        state: state.filter((i) => i !== action.payload.postId),
      };
    }

    default:
      return state;
  }
}

function PostsByIdReducer(state = AllPostInitialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { postId: newId, postText, authorId } = action.payload;
      return {
        ...state,
        newId: { id: newId, postText, authorId },
      };
    }
    case DELETE_POST: {
      const { payload: _, ...newPosts } = state;
      return {
        state: newPosts,
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
