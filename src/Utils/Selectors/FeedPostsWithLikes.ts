import { IFullPost } from "./IFullpost";
import { AllUsersById } from "./AllUsersById";
import { AllLikes } from "./AllLikes";
import { FeedPosts } from "./FeedPosts";
import { createSelector } from "reselect";
export const FeedPostsWithLikes = createSelector(
  FeedPosts,
  AllLikes,
  AllUsersById,
  (FeedPosts, AllLikes, AllUsersById) => {
    return FeedPosts.reduce((total: IFullPost[], amount) => {
      let like = { userLikeId: "", userLikeName: "" };
      let likes = [];
      for (let key in AllLikes) {
        if (AllLikes[key].postId === amount.postId) {
          like.userLikeId = AllLikes[key].userId;
          like.userLikeName = AllUsersById[AllLikes[key].userId].userName;
          likes.push(like);
        }
      }
      const fullPost = { ...amount, likes: likes };
      total.push(fullPost);
      return total;
    }, []);
  }
);
