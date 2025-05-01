import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { IPosterList } from "./post.types";

interface IPostProps {
  posts: IPosterList[];
}

interface IPostActions {
  initializePosts: (posts: IPosterList[]) => void;
  setPosts: (posts: IPosterList[]) => void;
  addPost: (post: IPosterList) => void;
  updatePost: (post: IPosterList) => void;
  removePost: (postId: number) => void;
}

export type PostStore = IPostProps & IPostActions;

export const usePostStore = () => {
  const INITIAL_POSTS: IPostProps = {
    posts: [],
  };
  return createStore<PostStore>()(
    persist((set) => ({
      ...INITIAL_POSTS,
      initializePosts: (posts) => set({ posts }),
      setPosts: (posts) => set({ posts }),
      addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
      updatePost: (post) =>
        set((state) => ({
          posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        })),
      removePost: (postId) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== postId),
        })),
    }),
      { name: "post-storage" },
    )
  )
}
