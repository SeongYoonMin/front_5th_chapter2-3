import QueryProvider from "@/shared/provider/QueryProvider";
import PostContainer from "@/widgets/ui/PostContainer";


const PostsManager = () => {

  return (
    <QueryProvider>
      <PostContainer />
    </QueryProvider>
  )
}

export default PostsManager