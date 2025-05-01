import { IPostItem } from '@/entities/posts/model/post.types'
import { Button } from '@/shared/ui'
import { MessageSquare } from 'lucide-react'

const DetailPost = ({ post }: { post: IPostItem }) => {
  const openPostDetail = (post: IPostItem) => {
    console.log(post)
  }
  return (
    <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}

export default DetailPost