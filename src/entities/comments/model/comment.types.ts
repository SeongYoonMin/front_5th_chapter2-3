import { ICommentUser } from "@/entities/users/model/users.type";

export interface IComment {
  body: string;
  id: number;
  postId: number;
  likes: number;
}

export interface ICommentDetail extends IComment {
  user: {
    username: string;
    id: number;
    fullName: string;
  };
}

export interface INewComment {
  body: string;
  postId: number | null;
  userId: number;
}

export interface IResponseAddComment {
  body: string;
  id: number;
  postId: number;
  user: ICommentUser;
}
