import { combineReducers, createStore } from "redux";
import { LoginReducer } from "./LoginReducer/LoginReducer";
import { UserReducer } from "./UserReducer/UsersReducer";
import { PostsReducer } from "./PostsReducer/PostsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  login: LoginReducer,
  posts: PostsReducer,
  user: UserReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
