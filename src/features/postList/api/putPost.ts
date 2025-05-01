import { IPostItem } from "@/entities/posts/model/post.types";
import { customAxios } from "@/shared/api/customAxios";

export const putPost = async ({ post }: { post: IPostItem }) => {
  const { data } = await customAxios.put(`/api/posts/${post.id}`, {
    body: JSON.stringify(post),
  })
  return data
}