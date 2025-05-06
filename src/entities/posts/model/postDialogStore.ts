import { create } from "zustand";

interface IPostDialogProps {
  isAddPostDialogOpen: boolean;
  isPostDetailDialogOpen: boolean;
  isUpdatePostDialogOpen: boolean;
}

interface IPostDialogActions {
  toggleAddPostDialog: () => void;
  togglePostDetailDialog: () => void;
  toggleUpdatePostDialog: () => void;
}

export type PostDialogStore = IPostDialogProps & IPostDialogActions;

const INITIAL_POST_DIALOG: IPostDialogProps = {
  isAddPostDialogOpen: false,
  isPostDetailDialogOpen: false,
  isUpdatePostDialogOpen: false,
};

export const usePostDialogStore = create<PostDialogStore>((set) => ({
  ...INITIAL_POST_DIALOG,
  toggleAddPostDialog: () => set((state) => ({ isAddPostDialogOpen: !state.isAddPostDialogOpen })),
  togglePostDetailDialog: () => set((state) => ({ isPostDetailDialogOpen: !state.isPostDetailDialogOpen })),
  toggleUpdatePostDialog: () => set((state) => ({ isUpdatePostDialogOpen: !state.isUpdatePostDialogOpen })),
}));
