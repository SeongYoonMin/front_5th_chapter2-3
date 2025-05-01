import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, Textarea, Button } from '.'
import { useDialogStore } from '../model/dialogStore'
import { useAddComment } from '@/features/addComment/model/useAddComment';
import { useSelectedStore } from '../model/selectStore';
import { useCommentStore } from '@/entities/comments/model/commentStore';

const AddCommentDialog = () => {
  const { addCommentStatus, setAddCommentStatus } = useDialogStore();
  const { selectedPost } = useSelectedStore();
  const { addComment} = useCommentStore();


  const [comments, setComment] = useState<string>("")
  const setShowAddCommentDialog = (status: boolean) => {
    setAddCommentStatus(status)
  }

  const mutationAddComment = useAddComment();
  const onClickAddComment = async () => {
    const data = await mutationAddComment.mutateAsync({ newComment: { body: comments, postId: selectedPost.id, userId: 1 } });
    addComment({body: data.body, id: data.id, postId: data.postId, likes: 0});
    setAddCommentStatus(false);
  }
  return (
    <Dialog open={addCommentStatus} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={comments}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={onClickAddComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCommentDialog