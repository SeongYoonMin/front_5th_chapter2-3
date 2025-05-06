
import { IPostItem } from "@/entities/posts/model/post.types";
import { usePostList } from "@/entities/posts/model/usePostList";
import { IUserData } from "@/entities/users/model/users.type";
import { useUserList } from "@/entities/users/model/useUserList";
import { useEffect, useMemo, useState } from "react";

export const usePosterList = ({ limit, skip }: { limit: number; skip: number; }) => {
  const [loading, setLoading] = useState(true)
  const postQuery = usePostList({ limit, skip });
  const userQuery = useUserList();

  const postsWithAuthors = useMemo(() => {
    if (!postQuery.data || !userQuery.data) return []

    return postQuery.data.posts.map((post: IPostItem) => ({
      ...post,
      author: userQuery.data.users.find((user: IUserData) => user.id === post.userId),
    }))
  }, [postQuery.data, userQuery.data]);

  useEffect(() => {
    setLoading(postQuery.isLoading || userQuery.isLoading)
  }, [postQuery.isLoading, userQuery.isLoading]);

  return {
    poster: postsWithAuthors,
    isLoading: loading,
    isError: postQuery.isError || userQuery.isError,
  }
}