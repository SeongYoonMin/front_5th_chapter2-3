import { IPostItem } from '@/entities/posts/model/post.types'
import { Button } from '@/shared/ui'
import { Edit2 } from 'lucide-react'

const UpdatePost = ({ post }: { post: IPostItem }) => {
  const onClickUpdatePost = () => {
    // setSelectedPost(post)
    // setShowEditDialog(true)
    console.log(post)
  }
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClickUpdatePost}
    >
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}

export default UpdatePost