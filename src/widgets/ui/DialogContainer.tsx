import AddCommentDialog from "@/features/addComment/ui/AddCommentDialog";
import AddPostDialog from "@/features/addPost/ui/AddPostDialog";
import PostDetailDialog from "@/features/detailPost/ui/PostDetailDialog";
import DetailUserDialog from "@/features/detailUser/ui/DetailUserDialog";
import UpdateCommentDialog from "@/features/updateComment/ui/UpdateCommentDialog";
import UpdatePostDialog from "@/features/updatePost/ui/UpdatePostDialog";

const DialogContainer = () => {
  return (
    <>
      <AddPostDialog />
      <PostDetailDialog />
      <AddCommentDialog />
      <DetailUserDialog />
      <UpdateCommentDialog />
      <UpdatePostDialog />
    </>
  );
};

export default DialogContainer;
