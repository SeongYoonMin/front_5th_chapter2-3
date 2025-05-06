import { useCommentDialogStore } from "@/entities/comments/model/commentDialogStore";
import { useCommentStore } from "@/entities/comments/model/commentStore";
import { useGetComments } from "@/entities/comments/model/useGetComments";
import { usePostDialogStore } from "@/entities/posts/model/postDialogStore";
import { highlightText } from "@/shared/lib/highlightText";
import { useQueryParams } from "@/shared/lib/useQueryParams";
import { useSelectedStore } from "@/shared/model/selectStore";
import { Button } from "@/shared/ui";
import SharedDialog from "@/shared/ui/SharedDialog";
import { Plus, ThumbsUp, Edit2, Trash2 } from "lucide-react";
import { useEffect } from "react";

const AddCommentButton = () => {
  const { toggleAddCommentDialog } = useCommentDialogStore();
  const onClickAddComment = () => {
    toggleAddCommentDialog();
    // setSelectedPost(postId);
  };
  return (
    <Button size="sm" onClick={onClickAddComment}>
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  );
};

const PostDetailDialog = () => {
  const { isPostDetailDialogOpen, togglePostDetailDialog } = usePostDialogStore();
  const { selectedPost } = useSelectedStore();
  const { comments ,setComments } = useCommentStore();
  const { searchQuery } = useQueryParams();
  const { data, isLoading, isError } = useGetComments({ postId: selectedPost?.id || 0 });

  const onClickLikeComment = (commentId: number, postId: number) => {
    console.log(commentId, postId);
    // likeComment.mutate({ commentId, postId });
  };

  const onClickEditComment = () => {
    // setSelectedComment(comment);
    // setShowEditCommentDialog(true);
    console.log("Edit comment");
  };

  const onClickDeleteComment = (commentId: number, postId: number) => {
    // deleteComment.mutate({ commentId, postId });
    console.log(commentId, postId);
  };
  useEffect(() => {
    if (data) {
      setComments(data);
    }
  }, [data, setComments]);

  if (isLoading) return <></>;
  if (isError) return <></>;
  if (!data) return null;

  return (
    <SharedDialog title="새로운 포스트 추가" open={isPostDetailDialogOpen} onOpenChange={togglePostDetailDialog}>
      <div className="space-y-4 overflow-hidden w-full">
        <p>{highlightText(selectedPost?.body, searchQuery)}</p>
        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">댓글</h3>
            <AddCommentButton />
          </div>
          <div className="space-y-1">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-center justify-between text-sm border-b pb-1">
                <div className="flex items-center space-x-2 overflow-hidden">
                  <span className="font-medium truncate">{comment.user.username}:</span>
                  <p className="truncate">{highlightText(comment.body, searchQuery)}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onClickLikeComment(comment.id, selectedPost?.id || 0)}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span className="ml-1 text-xs">{comment.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" onClick={onClickEditComment}>
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onClickDeleteComment(comment.id, selectedPost?.id || 0)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SharedDialog>
  );
};

export default PostDetailDialog;
