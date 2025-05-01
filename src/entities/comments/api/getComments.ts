import { customAxios } from "@/shared/api/customAxios"
import { IComment } from "../model/comment.types";

export const getComments = async ({ postId }: { postId: number }) => {
  const response = await customAxios<{ total: number; limit: number; skip: number; comments: IComment[] }>(`/api/comments/post/${postId}`)
  return response.data
}