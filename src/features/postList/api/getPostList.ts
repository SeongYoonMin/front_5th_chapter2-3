import { customAxios } from "@/shared/api/customAxios";

export const getPostList = async ({ limit, skip }: { limit: number; skip: number; }) => {
  return customAxios.get(`/api/posts`, { params: { limit, skip } })
}