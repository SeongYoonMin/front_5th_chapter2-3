import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddComment } from "../api/postAddComment";

import { IResponseAddComment } from "@/entities/comments/model/comment.types";
export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addComment"],
    mutationFn: postAddComment,
    onSuccess: (data: IResponseAddComment) => {
      queryClient.invalidateQueries({ queryKey: ["getComments", data.postId] });
      return data;
    },
  });
};
