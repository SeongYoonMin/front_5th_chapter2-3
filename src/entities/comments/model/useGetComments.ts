import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/getComments";

export const useGetComments = ({ postId }: { postId: number }) => {
  return useQuery({
    queryKey: ["getComments", postId],
    queryFn: async () => await getComments({ postId }),
    enabled: postId !== 0,
  });
};
