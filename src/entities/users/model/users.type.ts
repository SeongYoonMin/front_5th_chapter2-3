export interface IUserData {
  id: number;
  image: string;
  username: string;
}
export interface IUserDetailData extends IUserData {
  age: number;
  firstName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  company: {
    name: string;
    title: string;
  }
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