
import { IPostItem } from "@/entities/posts/model/post.types"
import { usePostStore } from "@/entities/posts/model/postStore"
import { IUserData } from "@/entities/users/model/users.type"
import DeletePost from "@/features/deletePost/ui/DeletePost"
import DetailPost from "@/features/detailPost/ui/DetailPost"
import UpdatePost from "@/features/updatePost/ui/UpdatePost"
import { highlightText } from "@/shared/lib/highlightText"
import { useQueryParams } from "@/shared/lib/useQueryParams"
import { Button, TableCell, TableRow } from "@/shared/ui"
import { Edit2, MessageSquare, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react"
type PosterList = { author?: IUserData } & IPostItem
const PostItem = ({ post }: { post: PosterList }) => {
  const postStore = usePostStore();
  const { searchQuery, selectedTag, setSelectedTag } = useQueryParams();
  const openUserModal = (author: IUserData) => {
    console.log(author)
  }
  const openPostDetail = (post: IPostItem) => {
    console.log(post)
  }
  return (
    <TableRow>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>{highlightText(post.title, searchQuery)}</div>

          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${selectedTag === tag
                  ? "text-white bg-blue-500 hover:bg-blue-600"
                  : "text-blue-800 bg-blue-100 hover:bg-blue-200"
                  }`}
                onClick={() => {
                  setSelectedTag(tag)
                  // updateURL()
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => openUserModal(post.author as IUserData)}>
          <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
          <span>{post.author?.username}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions?.likes || 0}</span>
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions?.dislikes || 0}</span>
        </div>
      </TableCell>
      <TableCell className="flex items-center gap-2">
        <DetailPost post={post} />
        <UpdatePost post={post} />
        <DeletePost postId={post.id} />
      </TableCell>
    </TableRow>
  )
}

export default PostItem