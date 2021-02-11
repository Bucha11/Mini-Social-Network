import { AllUsersById } from "./AllUsersById";
import { AllPostById } from "./AllPostById";
import { AllPostIds } from "./AllPostIds";
import { createSelector } from "reselect";
export const AllPosts = createSelector(
  AllPostIds,
  AllPostById,
  AllUsersById,
  (AllPostIds, AllPostById, AllUsersById) => {
    return AllPostIds.reduce((total: any[], amount) => {
      let authorName: string =
        AllUsersById[AllPostById[amount].authorId].userName;

      let postWithName = { ...AllPostById[amount], authorName: authorName };
      total.push(postWithName);
      return total;
    }, []);
  }
);
