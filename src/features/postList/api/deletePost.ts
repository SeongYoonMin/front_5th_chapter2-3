import { customAxios } from "@/shared/api/customAxios";

export const deletePost = async ({ id }: { id: number; }) => {
  const { data } = await customAxios.delete(`/api/posts/${id}`);
  return data;
}