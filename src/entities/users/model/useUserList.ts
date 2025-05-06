import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api/getUsers"


export const useUserList = () => {
  return useQuery({
    queryKey: ["userList"],
    queryFn: async () => await getUsers(),
  })
}