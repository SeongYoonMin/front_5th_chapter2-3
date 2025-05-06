import { customAxios } from "@/shared/api/customAxios"
import { IUserList } from "../model/users.type"

export const getUsers = async () => {
  const { data } = await customAxios.get<IUserList>("/api/users?limit=0&select=username,image")
  return data
}
