import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddPost } from "../api/postAddPost";
import { UseFormSetError } from "react-hook-form";
import { AxiosError } from "axios";

export const useAddPost = (setError: UseFormSetError<{ title: string; body: string; userId: string }>) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postAddPost,
    mutationKey: ["addPost"],
    onSuccess: (data) => {
      alert("게시물이 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["postList"] });
      return data;
    },
    onError: (data: AxiosError) => {
      const errorData = data.response?.data as { message: string };
      if (errorData.message.includes("User")) {
        setError("userId", { type: "custom", message: "유저 아이디가 존재하지 않습니다." });
        return;
      }
      alert(errorData.message);
      return;
    },
  });
};
