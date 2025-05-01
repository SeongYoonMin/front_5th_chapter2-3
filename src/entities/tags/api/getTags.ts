import { customAxios } from "@/shared/api/customAxios"
import { ITags } from "../model/tag.types"

export const getUsers = async () => {
  const response = await customAxios.get<ITags[]>("/api/posts/tags")
  return response.data
}