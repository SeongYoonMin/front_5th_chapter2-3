import { IPostItem } from "@/entities/posts/model/post.types";
import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { useSelectedStore } from "@/shared/model/selectStore";
import { Button } from "@/shared/ui";
import { MessageSquare } from "lucide-react";

const PostItemDetail = ({ post }: { post: IPostItem }) => {
  const { setSelectedPost } = useSelectedStore();
  const { togglePostDetailDialog } = usePostDialogStore();
  const openPostDetail = () => {
    setSelectedPost(post);
    togglePostDetailDialog();
  };
  return (
    <Button variant="ghost" size="sm" onClick={openPostDetail}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  );
};

export default PostItemDetail;
