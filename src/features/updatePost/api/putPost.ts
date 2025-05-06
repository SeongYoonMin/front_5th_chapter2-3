import { IPostItem } from "@/entities/posts/model/post.types";
import { customAxios } from "@/shared/api/customAxios";

export const putPost = async ({ post }: { post: Pick<IPostItem, "title" | "body" | "id"> }) => {
  const { data } = await customAxios.put<IPostItem>(`/api/posts/${post.id}`, {
    body: post,
  });
  return data;
};
