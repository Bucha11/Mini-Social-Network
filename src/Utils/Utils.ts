export type IUtils = {
  users: number;
  posts: number;
  getNewUserId(): string;
  getNewPostId(): string;
};

export const Utils: IUtils = {
  users: 1,
  posts: 1,
  getNewUserId() {
    return `users${this.users + 1}`;
  },
  getNewPostId() {
    return `post${this.posts + 1}`;
  },
};
