import { AllPosts } from "./AllPosts";
import { AllFeedUsers } from "./AllFeedUsers";
import { createSelector } from "reselect";
export const FeedPosts = createSelector(
  AllFeedUsers,
  AllPosts,
  (AllFeedUsers, AllPosts) => {
    return AllPosts.filter((item) => {
      return AllFeedUsers.includes(item.authorId);
    });
  }
);
