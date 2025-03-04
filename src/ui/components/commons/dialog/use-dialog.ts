import { useDisclosure } from '@heroui/react'

export function useDialog(onOpenDialog?: () => void) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  function open() {
    onOpen()
    if (onOpenDialog) onOpenDialog()
  }

  function close() {
    onClose()
  }

  return {
    isOpen,
    open,
    close,
  }
}
