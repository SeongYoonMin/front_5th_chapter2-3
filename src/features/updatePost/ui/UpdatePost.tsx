import { IPostItem } from "@/entities/posts/model/post.types";
import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { useSelectedStore } from "@/shared/model/selectStore";
import { Button } from "@/shared/ui";
import { Edit2 } from "lucide-react";

const UpdatePost = ({ post }: { post: IPostItem }) => {
  const { setSelectedPost } = useSelectedStore();
  const { toggleUpdatePostDialog } = usePostDialogStore();
  const onClickUpdatePost = () => {
    setSelectedPost(post);
    toggleUpdatePostDialog();
  };
  return (
    <Button variant="ghost" size="sm" onClick={onClickUpdatePost}>
      <Edit2 className="w-4 h-4" />
    </Button>
  );
};

export default UpdatePost;
