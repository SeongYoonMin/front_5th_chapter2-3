import { useMutation } from "@tanstack/react-query";
import { putPost } from "../api/putPost";

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: putPost,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error("Error updating post", error);
    },
  });
};
