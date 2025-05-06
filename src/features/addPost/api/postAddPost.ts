import { IPostAdd, IPostItem } from "@/entities/posts/model/post.types";
import { customAxios } from "@/shared/api/customAxios";

export const postAddPost = async ({ newPost }: { newPost: IPostAdd }) => {
  const { data } = await customAxios.post<Pick<IPostItem, "id" | "body" | "title" | "userId">>("/api/posts/add", {
    body: newPost.body,
    title: newPost.title,
    userId: newPost.userId,
  });
  return data;
};
