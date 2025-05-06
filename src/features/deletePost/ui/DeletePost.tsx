import { Button } from '@/shared/ui'
import { Trash2 } from 'lucide-react'
import { useDeletePost } from '../model/useDeletePost';

const DeletePost = ({ postId }: { postId: number }) => {
  
  const mutationDeletePost = useDeletePost();
  const onClickDeletePost = () => {
    mutationDeletePost.mutate({ id: postId });
  }
  return (
    <Button variant="ghost" size="sm" onClick={onClickDeletePost}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}

export default DeletePost