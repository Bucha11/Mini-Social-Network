import { IFullPost } from "./IFullpost";
import { AllUsersById } from "./AllUsersById";
import { AllLikes } from "./AllLikes";
import { AllPosts } from "./AllPosts";
import { createSelector } from "reselect";
export const AllPostsWithLikes = createSelector(
  AllPosts,
  AllLikes,
  AllUsersById,

  (AllPosts, AllLikes, AllUsersById) => {
    return AllPosts.reduce((total: IFullPost[], amount) => {
      let like = { userLikeId: "", userLikeName: "" };
      let likes = [];
      for (let key in AllLikes) {
        if (AllLikes[key].postId === amount.postId) {
          like.userLikeId = AllLikes[key].userId;
          like.userLikeName = AllUsersById[AllLikes[key].userId].userName;
          likes.push(like);
        }
      }
      let fullPost = { ...amount, likes: likes };
      total.push(fullPost);
      return total;
    }, []);
  }
);
