import { IPostItem } from '@/entities/posts/model/post.types'
import { useDialogStore } from '@/shared/model/dialogStore'
import { useSelectedStore } from '@/shared/model/selectStore'
import { Button } from '@/shared/ui'
import { MessageSquare } from 'lucide-react'

const DetailPost = ({ post }: { post: IPostItem }) => {
  const { setSelectedPost } = useSelectedStore()
  const { setDetailPostStatus } = useDialogStore();
  const openPostDetail = (post: IPostItem) => {
    setSelectedPost(post);
    setDetailPostStatus(true)
  }
  return (
    <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}

export default DetailPost