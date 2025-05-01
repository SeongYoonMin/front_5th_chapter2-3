import { IPostItem } from "@/entities/posts/model/post.types";
import { customAxios } from "@/shared/api/customAxios";

export const postAddPost = async ({ newPost }: { newPost: IPostItem }) => {
  const { data } = await customAxios.post("/api/posts/add", {
    body: newPost,
  })
  return data
}