import { create } from "zustand";
import { IPosterList } from "./post.types";

interface IPostProps {
  posts: IPosterList[];
}

interface IPostActions {
  setPosts: (posts: IPosterList[]) => void;
  addPost: (post: IPosterList) => void;
  updatePost: (post: IPosterList) => void;
  removePost: (postId: number) => void;
}

export type PostStore = IPostProps & IPostActions;

const INITIAL_POSTS: IPostProps = {
  posts: [],
};

export const usePostStore = create<PostStore>((set) => ({
  ...INITIAL_POSTS,
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  updatePost: (newPost) =>
    set((state) => ({
      posts: state.posts.map((post) => (post.id === newPost.id ? newPost : post)),
    })),
  removePost: (postId) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== postId),
    })),
}));
