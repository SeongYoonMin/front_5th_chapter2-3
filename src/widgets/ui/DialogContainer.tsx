import AddCommentDialog from '@/shared/ui/AddCommentDialog'
import AddPostDialog from '@/shared/ui/AddPostDialog'
import DetailPostDialog from '@/shared/ui/DetailPostDialog'
import DetailUserDialog from '@/shared/ui/DetailUserDialog'
import UpdateCommentDialog from '@/shared/ui/UpdateCommentDialog'
import UpdatePostDialog from '@/shared/ui/UpdatePostDialog'

const DialogContainer = () => {
  return (
    <>
      <AddCommentDialog />
      <AddPostDialog />
      <DetailPostDialog />
      <DetailUserDialog />
      <UpdateCommentDialog />
      <UpdatePostDialog />
    </>
  )
}

export default DialogContainer