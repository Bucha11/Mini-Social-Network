import { ILikes } from "./ILikes";
export interface IFullPost {
  likes: Array<ILikes>;
  postId: string;
  postText: string;
  authorId: string;
  authorName: string;
}
