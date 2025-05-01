import { ThumbsUp, ThumbsDown } from 'lucide-react'


const PostReactions = ({ likes, dislikes }: { likes: number; dislikes: number; }) => {
  return (
    <div className="flex items-center gap-2">
      <ThumbsUp className="w-4 h-4" />
      <span>{likes}</span>
      <ThumbsDown className="w-4 h-4" />
      <span>{dislikes}</span>
    </div>
  )
}

export default PostReactions