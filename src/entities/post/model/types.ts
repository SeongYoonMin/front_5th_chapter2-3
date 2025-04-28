export interface IPostItem {
  body: string;
  id: number;
  reactions: number[];
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