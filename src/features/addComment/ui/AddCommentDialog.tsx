import { useCommentDialogStore } from "@/entities/comments/model/commentDialogStore";
import { useCommentStore } from "@/entities/comments/model/commentStore";
import { useAddComment } from "@/features/addComment/model/useAddComment";
import { useSelectedStore } from "@/shared/model/selectStore";
import { Textarea, Button } from "@/shared/ui";
import SharedDialog from "@/shared/ui/SharedDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddCommentDialog = () => {
  const { isAddCommentDialogOpen, toggleAddCommentDialog } = useCommentDialogStore();
  const { selectedPost } = useSelectedStore();
  const { addComment } = useCommentStore();
  const mutationAddComment = useAddComment();

  const commentSchema = z.object({
    comments: z.string().min(1, { message: "댓글 내용을 입력하세요." }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });
  const submitAddComment = handleSubmit(async (data) => {
    const commentResponse = await mutationAddComment.mutateAsync({
      newComment: { body: data.comments, postId: selectedPost.id, userId: 1 },
    });
    addComment({ ...commentResponse, likes: 0 });
    reset();
    toggleAddCommentDialog();
  });

  return (
    <SharedDialog title="새로운 댓글 추가" open={isAddCommentDialogOpen} onOpenChange={toggleAddCommentDialog}>
      <form className="space-y-4" onSubmit={submitAddComment}>
        <Textarea placeholder="댓글 내용" {...register("comments")} />
        {errors.comments && <p className="text-red-500">{errors.comments.message}</p>}
        <Button type="submit">댓글 추가</Button>
      </form>
    </SharedDialog>
  );
};

export default AddCommentDialog;
