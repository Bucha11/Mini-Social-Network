import { combineReducers, createStore } from "redux";

import { UserReducer } from "./UserReducer/UsersReducer";
import { PostsReducer } from "./PostsReducer/PostsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UserReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
