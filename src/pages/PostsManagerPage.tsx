import QueryProvider from "@/shared/provider/QueryProvider";
import DialogContainer from "@/widgets/ui/DialogContainer";
import PostContainer from "@/widgets/ui/PostContainer";


const PostsManager = () => {

  return (
    <QueryProvider>
      <PostContainer />
      {/* <DialogContainer /> */}
    </QueryProvider>
  )
}

export default PostsManager