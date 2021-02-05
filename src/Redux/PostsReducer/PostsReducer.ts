import { DELETE_POST, IPostsTypes, ADD_POST, LIKE_POST } from "./IPostsActions";
import { initialState } from "./../InitialState/InitialState";
import { combineReducers } from "redux";

function AllIdPostsReducer(state = initialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { id: newId } = action.payload;
      return {
        ...state,
        posts: { ...state.posts.byId, allIds: [...state.users.allIds, newId] },
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: {
          ...state.posts.byId,
          allIds: state.users.allIds.filter((i) => i !== action.payload),
        },
      };
    }

    case LIKE_POST: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
}

function PostsByIdReducer(state = initialState, action: IPostsTypes) {
  switch (action.type) {
    case ADD_POST: {
      const { id: newId, text, author } = action.payload;
      return {
        ...state,
        posts: {
          ...state.posts.allIds,
          byId: {
            ...state.posts.byId,
            newId: { id: newId, text, author, likes: [] },
          },
        },
      };
    }
    case DELETE_POST: {
      const { payload: _, ...newPosts } = state.posts.byId;
      return {
        ...state,
        posts: {
          ...state.posts.allIds,
          byId: newPosts,
        },
      };
    }

    case LIKE_POST: {
      const { author: postAuthor, id: postId } = action.payload;
      return {
        ...state,
        posts: {
          ...state.posts.allIds,
          byId: {
            ...state.posts.byId,
            postId: {
              ...state.posts.byId.postId,
              likes: [...state.posts.byId.postId.likes, postAuthor],
            },
          },
        },
      };
    }
    default:
      return state;
  }
}

export const PostsReducer = combineReducers({
  AllIdPostsReducer,
  PostsByIdReducer,
});
