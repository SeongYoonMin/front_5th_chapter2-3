import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePost } from "../api/deletePost"

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    mutationKey: ["deletePost"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postList"] })
    }
  })
}