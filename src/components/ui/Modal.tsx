import { createPortal } from 'react-dom'
import type { MouseEvent } from 'react'

function Modal({
  children,
  isClosed,
  setIsClosed,
}: {
  children: React.ReactNode
  isClosed: boolean
  setIsClosed: (isClosed: boolean) => void
}) {
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    // If the user is click outside of modal instead of its child component
    if (event.target === event.currentTarget) {
      setIsClosed(true)
    }
  }

  if (isClosed) {
    return null
  }

  return createPortal(
    <div className="fixed z-50 inset-0 bg-black/50" onClick={onClick}>
      {children}
    </div>,
    document.body,
  )
}

export default Modal
