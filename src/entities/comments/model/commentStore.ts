import { create } from "zustand";
import { IComment } from "./comment.types";

interface ICommentProps {
  total: number;
  skip: number;
  limit: number;
  comments: IComment[]
}

interface ICommentActions {
  setComments: (comments: ICommentProps) => void;
  addComment: (comment: IComment) => void;
  removeComment: (commentId: number) => void;
  updateComment: (commentId: number, updatedComment: IComment) => void;
}

export type CommentStore = ICommentProps & ICommentActions;

const INITIAL_COMMENTS: ICommentProps = {
  comments: [],
  total: 0,
  skip: 0,
  limit: 0,
};

export const useCommentStore = create<CommentStore>((set) => ({
  ...INITIAL_COMMENTS,
  setComments: (comments) => set({ ...comments }),
  addComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
  removeComment: (commentId) =>
    set((state) => ({
      comments: state.comments.filter((comment) => comment.id !== commentId),
    })),
  updateComment: (commentId, updatedComment) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.id === commentId ? updatedComment : comment
      ),
    })),
}));
