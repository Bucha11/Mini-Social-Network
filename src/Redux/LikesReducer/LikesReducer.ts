import { ILikesTypes, UNLIKE_POST, LIKE_POST } from "./ILikesActions";

import { initialState } from "./../InitialState/InitialState";

const LikesInitialState = initialState.likes;

export function LikesReducer(state = LikesInitialState, action: ILikesTypes) {
  switch (action.type) {
    case LIKE_POST: {
      const { id, authorId } = action.payload;
      return {
        ...state,
        [authorId + "-" + id]: {
          userId: authorId,
          followersId: id,
        },
      };
    }
    case UNLIKE_POST: {
      const { id, authorId } = action.payload;
      const { [authorId + "-" + id]: _, ...newLikes } = state;
      return {
        state: newLikes,
      };
    }

    default:
      return state;
  }
}
