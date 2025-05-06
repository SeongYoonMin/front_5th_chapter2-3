import { create } from "zustand";

interface ICommentDialogProps {
  isAddCommentDialogOpen: boolean;
  isUpdateCommentDialogOpen: boolean;
}

interface ICommentDialogActions {
  toggleAddCommentDialog: () => void;
  toggleUpdateCommentDialog: () => void;
}

export type CommentDialogStore = ICommentDialogProps & ICommentDialogActions;

const INITIAL_COMMENT_DIALOG: ICommentDialogProps = {
  isAddCommentDialogOpen: false,
  isUpdateCommentDialogOpen: false,
};

export const useCommentDialogStore = create<CommentDialogStore>((set) => ({
  ...INITIAL_COMMENT_DIALOG,
  toggleAddCommentDialog: () => set((state) => ({ isAddCommentDialogOpen: !state.isAddCommentDialogOpen })),
  toggleUpdateCommentDialog: () => set((state) => ({ isUpdateCommentDialogOpen: !state.isUpdateCommentDialogOpen })),
}));
