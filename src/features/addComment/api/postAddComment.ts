import { INewComment, IResponseAddComment } from "@/entities/comments/model/comment.types";
import { customAxios } from "@/shared/api/customAxios"

export const postAddComment = async ({ newComment }: { newComment: INewComment }) => {
  const { data } = await customAxios.post<IResponseAddComment>("/api/comments/add", {
    ...newComment,
  });
  return data;
}