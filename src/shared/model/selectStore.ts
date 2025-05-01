import { IPostItem } from "@/entities/posts/model/post.types";
import { create } from "zustand";

interface ISelectedProps {
  selectedPost: IPostItem;
  selectedCommentId: number;
  selectedUserId: number;
}

interface ISelectedActions {
  setSelectedPost: (post: IPostItem) => void;
  setSelectedCommentId: (id: number) => void;
  setSelectedUserId: (id: number) => void;

}

export type SelectedStore = ISelectedProps & ISelectedActions;

const INITIAL_SELECTED: ISelectedProps = {
  selectedPost: {} as IPostItem,
  selectedCommentId: 0,
  selectedUserId: 0,
};

export const useSelectedStore = create<SelectedStore>((set) => ({
  ...INITIAL_SELECTED,
  setSelectedPost: (post) => set({ selectedPost: post }),
  setSelectedCommentId: (id) => set({ selectedCommentId: id }),
  setSelectedUserId: (id) => set({ selectedUserId: id }),
}));
