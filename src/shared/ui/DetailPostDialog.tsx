import { Dialog, DialogContent, DialogHeader, DialogTitle } from '.'
import { highlightText } from '../lib/highlightText'
import { useQueryParams } from '../lib/useQueryParams';
import { useDialogStore } from '../model/dialogStore';
import { useSelectedStore } from '../model/selectStore';

const DetailPostDialog = () => {
  const { detailPostStatus ,setDetailPostStatus } = useDialogStore();
  const { selectedPost } = useSelectedStore();
  const { searchQuery } = useQueryParams();
  const onOpenChangeDetailPostDialog = (status: boolean) => {
    setDetailPostStatus(status)
  }
  return (
    <Dialog open={detailPostStatus} onOpenChange={onOpenChangeDetailPostDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title, searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body, searchQuery)}</p>
          {renderComments(selectedPost?.id)}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DetailPostDialog
