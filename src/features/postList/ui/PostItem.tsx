
import { IPostItem } from "@/entities/posts/model/post.types"
import { IUserData } from "@/entities/users/model/users.type"
import DeletePost from "@/features/deletePost/ui/DeletePost"
import DetailPost from "@/features/detailPost/ui/DetailPost"
import PostReactions from "@/features/postReactions/ui/PostReactions"
import UpdatePost from "@/features/updatePost/ui/UpdatePost"
import { highlightText } from "@/shared/lib/highlightText"
import { useQueryParams } from "@/shared/lib/useQueryParams"
import { TableCell, TableRow } from "@/shared/ui"

type PosterList = { author?: IUserData } & IPostItem
const PostItem = ({ post }: { post: PosterList }) => {

  const { searchQuery, selectedTag, setSelectedTag } = useQueryParams();
  const openUserModal = (author: IUserData) => {
    console.log(author)
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
        <PostReactions likes={post.reactions?.likes || 0} dislikes={post.reactions?.dislikes || 0} />
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