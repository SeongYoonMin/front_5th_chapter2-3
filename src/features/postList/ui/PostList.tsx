import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/shared/ui'
import PostItem from './PostItem'
import { usePostStore } from '@/entities/posts/model/postStore'
import { useEffect } from 'react';
import { usePosterList } from '../hooks/usePosterList';

const PostList = () => {
  const { setPosts } = usePostStore();
  const { poster, isLoading, isError } = usePosterList({ limit: 10, skip: 0 });
  useEffect(() => {
    if (poster) {
      setPosts(poster);
    }
  }, [poster, setPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading posts</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead className="w-[150px]">작성자</TableHead>
          <TableHead className="w-[150px]">반응</TableHead>
          <TableHead className="w-[150px]">작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {poster.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </TableBody>
    </Table>
  )
}

export default PostList