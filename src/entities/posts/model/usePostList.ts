import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../api/getPosts"

export const usePostList = ({ limit, skip }: { limit: number; skip: number; }) => {
  return useQuery({
    queryKey: ["postList"],
    queryFn: async () => await getPosts({ limit: limit, skip: skip }),
  })
}