import { useCommentDialogStore } from "@/entities/comments/model/commentDialogStore";
import { Textarea, Button } from "@/shared/ui";
import SharedDialog from "@/shared/ui/SharedDialog";

const UpdateCommentDialog = () => {
  const { isUpdateCommentDialogOpen, toggleUpdateCommentDialog } = useCommentDialogStore();
  const submitUpdateComment = () => {};
  return (
    <SharedDialog title="댓글 수정" open={isUpdateCommentDialogOpen} onOpenChange={toggleUpdateCommentDialog}>
      <form className="space-y-4" onSubmit={submitUpdateComment}>
        <Textarea placeholder="댓글 내용" />
        <Button type="submit">댓글 업데이트</Button>
      </form>
    </SharedDialog>
  );
};

export default UpdateCommentDialog;
