import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { useSelectedStore } from "@/shared/model/selectStore";
import { Button, Input, Textarea } from "@/shared/ui";
import SharedDialog from "@/shared/ui/SharedDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdatePost } from "../model/useUpdatePost";
import { usePostStore } from "@/entities/posts/model/postStore";

const UpdatePostDialog = () => {
  const { isUpdatePostDialogOpen, toggleUpdatePostDialog } = usePostDialogStore();
  const { selectedPost } = useSelectedStore();
  const { updatePost } = usePostStore();

  const updatePostScheme = z.object({
    title: z.string().min(1, { message: "제목을 입력하세요." }).default(selectedPost.title),
    body: z.string().min(1, { message: "내용을 입력하세요." }).default(selectedPost.body),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updatePostScheme),
  });

  const mutationUpdatePost = useUpdatePost();
  const submitUpdatePost = handleSubmit(async (data) => {
    const responseUpdatePost = await mutationUpdatePost.mutateAsync({ post: { ...data, id: selectedPost?.id } });
    updatePost(responseUpdatePost);
    reset();
    toggleUpdatePostDialog();
  });

  const onToggleUpdatePostDialog = () => {
    reset();
    toggleUpdatePostDialog();
  }
  return (
    <SharedDialog title="게시물 수정" open={isUpdatePostDialogOpen} onOpenChange={onToggleUpdatePostDialog}>
      <form className="space-y-4" onSubmit={submitUpdatePost}>
        <Input placeholder="제목" {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <Textarea rows={15} placeholder="내용" {...register("body")} />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
        <Button type="submit">게시물 업데이트</Button>
      </form>
    </SharedDialog>
  );
};

export default UpdatePostDialog;
