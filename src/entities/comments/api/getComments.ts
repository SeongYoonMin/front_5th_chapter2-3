import { customAxios } from "@/shared/api/customAxios";
import { ICommentDetail } from "../model/comment.types";

export interface IResponseGetComments {
  comments: ICommentDetail[];
  total: number;
  skip: number;
  limit: number;
}

export const getComments = async ({ postId }: { postId: number }) => {
  const { data } = await customAxios<IResponseGetComments>(`/api/comments/post/${postId}`);
  return data;
};
