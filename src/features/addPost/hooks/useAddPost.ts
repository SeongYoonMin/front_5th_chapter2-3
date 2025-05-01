import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postAddPost } from "../api/postAddPost"

export const useAddPost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postAddPost,
    mutationKey: ["addPost"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postList"] })
    },
  })
}