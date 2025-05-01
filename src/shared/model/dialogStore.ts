import { create } from "zustand";

interface IDialogProps {
  addPostStatus: boolean;
  addCommentStatus: boolean;
  detailPostStatus: boolean;
  detailUserStatus: boolean;
  updateCommentStatus: boolean;
  updatePostStatus: boolean;
}

interface IDialogActions {
  setAddPostStatus: (status: boolean) => void;
  setAddCommentStatus: (status: boolean) => void;
  setDetailPostStatus: (status: boolean) => void;
  setDetailUserStatus: (status: boolean) => void;
  setUpdateCommentStatus: (status: boolean) => void;
  setUpdatePostStatus: (status: boolean) => void;
}

export type DialogStore = IDialogProps & IDialogActions;

const INITIAL_DIALOG: IDialogProps = {
  addPostStatus: false,
  addCommentStatus: false,
  detailPostStatus: false,
  detailUserStatus: false,
  updateCommentStatus: false,
  updatePostStatus: false,
};

export const useDialogStore = create<DialogStore>((set) => ({
  ...INITIAL_DIALOG,
  setAddPostStatus: (status) => set({ addPostStatus: status }),
  setAddCommentStatus: (status) => set({ addCommentStatus: status }),
  setDetailPostStatus: (status) => set({ detailPostStatus: status }),
  setDetailUserStatus: (status) => set({ detailUserStatus: status }),
  setUpdateCommentStatus: (status) => set({ updateCommentStatus: status }),
  setUpdatePostStatus: (status) => set({ updatePostStatus: status }),
}));
