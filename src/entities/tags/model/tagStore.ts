import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { ITags } from "./tag.types";


interface ITagsProps {
  tags: ITags[];
}

interface ITagsActions {
  setTags: (tags: ITags[]) => void;

}

export type TagsStore = ITagsProps & ITagsActions;

export const useTagsStore = () => {
  const INITIAL_TAGS: ITagsProps = {
    tags: [],
  };
  return createStore<TagsStore>()(
    persist((set) => ({
      ...INITIAL_TAGS,
      setTags: (tags) => set({ tags }),
    }),
      { name: "post-storage" },
    )
  )
}
