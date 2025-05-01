import { customAxios } from "@/shared/api/customAxios";
import { IPostList } from "../model/post.types";

export const getPosts = async ({ limit, skip }: { limit: number; skip: number; }) => {
  const { data } = await customAxios.get<IPostList>(`/api/posts`, { params: { limit, skip } })
  return data
}