import { combineReducers, createStore } from "redux";

import { UserReducer } from "./UserReducer/UsersReducer";
import { PostsReducer } from "./PostsReducer/PostsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { LikesReducer } from "./LikesReducer/LikesReducer";
import { FollowersReducer } from "./FollowersReducer/FollowersReducer";

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UserReducer,
  likes: LikesReducer,
  followers: FollowersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
