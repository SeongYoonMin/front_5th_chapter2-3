import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { IUserData } from "./users.type";


interface IUserProps {
  users: IUserData[];
}

interface IUserActions {
  setUsers: (users: IUserData[]) => void;
  addUser: (post: IUserData) => void;
  updateUser: (post: IUserData) => void;
  removeUser: (postId: number) => void;
}

export type UserStore = IUserProps & IUserActions;

export const useUserStore = () => {
  const INITIAL_POSTS: IUserProps = {
    users: [],
  };
  return createStore<UserStore>()(
    persist((set) => ({
      ...INITIAL_POSTS,
      setUsers: (users) => set({ users }),
      addUser: (post) => set((state) => ({ users: [...state.users, post] })),
      updateUser: (post) =>
        set((state) => ({
          users: state.users.map((p) => (p.id === post.id ? post : p)),
        })),
      removeUser: (postId) =>
        set((state) => ({
          users: state.users.filter((post) => post.id !== postId),
        })),
    }),
      { name: "post-storage" },
    )
  )
}
