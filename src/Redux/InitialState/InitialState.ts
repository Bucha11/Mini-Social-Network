import { IInitialState } from "./IInitialState";
export const initialState: IInitialState = {
  users: {
    byId: {
      user1: {
        id: "user1",
        name: "Vasya",
        posts: ["post1"],
        followers: ["user2"],
        following: ["user3"],
      },
      user2: {
        id: "user2",
        name: "Petya",
        posts: ["post2"],
        followers: ["user3"],
        following: ["user1"],
      },
      user3: {
        id: "user3",
        name: "Vitya",
        posts: ["post3"],
        followers: ["user1"],
        following: ["user2"],
      },
    },
    allIds: ["user1", "user2", "user3"],
  },
  posts: {
    byId: {
      post1: {
        id: "post1",
        text: "ПРивет ",
        author: "user1",
        likes: ["user1", "user2", "user3"],
      },
      post2: {
        id: "post2",
        text: "Прощайте ихтиандры",
        author: "user2",
        likes: ["user1", "user2", "user3"],
      },
      post3: {
        id: "post3",
        text: "Дома",
        author: "user3",
        likes: ["user1", "user2"],
      },
    },
    allIds: ["post1", "post2", "post3"],
  },
  currentUser: "",
};
