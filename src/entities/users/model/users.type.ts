export interface IUserData {
  id: number;
  image: string;
  username: string;
}

export interface ICommentUser {
  id: number;
  fullName: string;
  username: string
}

export interface IUserList {
  limit: number;
  skip: number;
  total: number;
  users: IUserData[];
}