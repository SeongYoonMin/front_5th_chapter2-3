import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { Input, Textarea, Button } from "@/shared/ui";
import SharedDialog from "@/shared/ui/SharedDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAddPost } from "../model/useAddPost";
import { usePostStore } from "@/entities/posts/model/postStore";

const AddPostDialog = () => {
  const { isAddPostDialogOpen, toggleAddPostDialog } = usePostDialogStore();
  const { addPost } = usePostStore();

  const postSchema = z.object({
    title: z.string().min(1, { message: "제목을 입력하세요." }),
    body: z.string().min(1, { message: "내용을 입력하세요." }),
    userId: z.string().min(1, { message: "사용자 ID를 입력하세요." }),
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const mutationAddPost = useAddPost(setError);
  const submitAddPost = handleSubmit(async (data) => {
    const newPost = {
      body: data.body,
      title: data.title,
      userId: Number(data.userId),
    };
    const responseAddPost = await mutationAddPost.mutateAsync({
      newPost,
    });
    addPost({ ...responseAddPost, reactions: { likes: 0, dislikes: 0 }, tags: [], views: 0 });
    reset();
    toggleAddPostDialog();
  });
  return (
    <SharedDialog title="새로운 포스트 추가" open={isAddPostDialogOpen} onOpenChange={toggleAddPostDialog}>
      <form className="space-y-4" onSubmit={submitAddPost}>
        <Input placeholder="제목" {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        <Textarea rows={30} placeholder="내용" {...register("body")} />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
        <Input type="number" placeholder="사용자 ID" {...register("userId")} />
        {errors.userId && <p className="text-red-500">{errors.userId.message}</p>}
        <Button type="submit">게시물 추가</Button>
      </form>
    </SharedDialog>
  );
};

export default AddPostDialog;
