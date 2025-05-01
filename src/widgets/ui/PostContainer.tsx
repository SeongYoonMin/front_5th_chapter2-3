import PostHeader from '@/features/postHeader/ui/PostHeader'
import PostList from '@/features/postList/ui/PostList'
import { Card, CardContent } from '@/shared/ui'

const PostContainer = () => {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <PostHeader />
      <CardContent>
        <PostList />
      </CardContent>
    </Card>
  )
}

export default PostContainer