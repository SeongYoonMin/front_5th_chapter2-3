import { usePostStore } from '@/entities/posts/model/postStore'
import { Button } from '@/shared/ui'
import { Trash2 } from 'lucide-react'

const DeletePost = ({ postId }: { postId: number }) => {
  const postStore = usePostStore()
  return (
    <Button variant="ghost" size="sm" onClick={() => postStore.getState().removePost(postId)}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}

export default DeletePost