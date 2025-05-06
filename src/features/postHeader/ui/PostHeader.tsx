import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { CardHeader, CardTitle, Button } from "@/shared/ui";
import { Plus } from "lucide-react";

const PostHeader = () => {
  const { toggleAddPostDialog } = usePostDialogStore();
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={toggleAddPostDialog}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
      </CardTitle>
    </CardHeader>
  );
};

export default PostHeader;
