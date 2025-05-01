import { useMutation } from "@tanstack/react-query"
import { postAddComment } from "../api/postAddComment"

import { IResponseAddComment } from "@/entities/comments/model/comment.types";
export const useAddComment = () => {

  return useMutation({
    mutationKey: ["addComment"],
    mutationFn: postAddComment,
    onSuccess: (data: IResponseAddComment) => {
      return data
    }
  })
}