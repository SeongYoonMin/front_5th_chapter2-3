import React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "."
import { DialogDescription } from "@radix-ui/react-dialog"

const SharedDialog = ({
  title,
  children,
  open,
  onOpenChange,
}: {
  title: string | React.ReactNode
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  const handleOpenChange = () => {
    onOpenChange(!open)
  }
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription />
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default SharedDialog
