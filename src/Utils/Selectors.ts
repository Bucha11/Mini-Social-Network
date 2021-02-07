import { createSelector } from "reselect";
import {
  IGroupPosts,
  IGroupUsers,
} from "./../Redux/InitialState/IInitialState";
import { RootState } from "./../Redux/Store";
const allPostIds = (state: RootState): Array<string> => state.posts.allIds;
const byPostId = (state: RootState): IGroupPosts => state.posts.byId;
const currentUser = (state: RootState): string => state.users.currentUser;
const byUsersId = (state: RootState): IGroupUsers => state.users.byId;

const allFeedUsers = createSelector(
  currentUser,
  byUsersId,
  (currentUser, byUsersId) => {
    return [...byUsersId[currentUser].following, currentUser];
  }
);

const allFeedUsersPosts = createSelector(
  allFeedUsers,
  byUsersId,
  (allFeedUsers, byUsersId) => {
    return allFeedUsers.map((i) => {
      return byUsersId[i].posts;
    });
  }
);

const allPosts = createSelector(allPostIds, byPostId, (allIds, byPostId) => {
  return allIds.map((i) => {
    return byPostId[i];
  });
});

export const feedPosts = createSelector(
  allFeedUsersPosts,
  byPostId,
  (allFeedUsersPosts, byPostId) => {
    return allFeedUsersPosts.flat(1).map((i) => {
      return byPostId[i];
    });
  }
);

export const allPostsWithLikes = createSelector(
  allPosts,
  byUsersId,

  (allPosts, byUsersId) => {
    return allPosts.reduce((total: any[], amount) => {
      let likes = amount.likes.map((i: string | number) => {
        return byUsersId[i];
      });
      let id = amount.author;
      let author = byUsersId[id].name;
      const newUser = { ...amount, likes: likes, author: author };
      total.push(newUser);
      return total;
    }, []);
  }
);

export const feedPostsWithLikes = createSelector(
  feedPosts,
  byUsersId,
  (feedPosts, byUsersId) => {
    return feedPosts.reduce((total: any[], amount) => {
      let likes = amount.likes.map((i: string | number) => {
        return byUsersId[i];
      });
      let id = amount.author;
      let author = byUsersId[id].name;
      const newUser = { ...amount, likes: likes, author: author };
      total.push(newUser);
      return total;
    }, []);
  }
);
