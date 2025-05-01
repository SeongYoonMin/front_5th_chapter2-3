import { ICommentUser } from "@/entities/users/model/users.type";

export interface IComment {
  body: string;
  id: number;
  postId: number;
  likes: number;
}

export interface INewComment {
  body: string;
  postId: number | null;
  userId: number;
}

export interface IResponseAddComment extends Omit<IComment, "likes"> {
  user: ICommentUser;
}