import { IUserData } from "@/entities/users/model/users.type";

export interface IPostItem {
  body: string;
  id: number;
  reactions: {
    likes?: number;
    dislikes?: number;
  };
  tags: string[];
  title: string;
  userId: number;
  views: number;
}

export interface IPostList {
  limit: number;
  skip: number;
  total: number;
  posts: IPostItem[];
}

export type IPosterList = IPostItem & { author?: IUserData }