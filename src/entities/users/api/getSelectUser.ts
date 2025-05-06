import { customAxios } from "@/shared/api/customAxios"
import { IUserDetailData } from "../model/users.type"

export const getSelectUser = async ({ userId }: { userId: number }) => {
  const { data } = await customAxios.get<IUserDetailData>(`/api/users/${userId}`)
  return data
}
