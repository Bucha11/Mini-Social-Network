import { AllFollowers } from "./AllFollowers";
import { CurrentUser } from "./CurrentUser";
import { createSelector } from "reselect";
export const AllFeedUsers = createSelector(
  CurrentUser,
  AllFollowers,
  (CurrentUser, AllFollowers) => {
    let followersIdArray: Array<string> = [];
    followersIdArray.push(CurrentUser);
    for (let key in AllFollowers) {
      if (key.includes(CurrentUser)) {
        followersIdArray.push(AllFollowers[key].followersId);
      }
    }
    return followersIdArray;
  }
);
