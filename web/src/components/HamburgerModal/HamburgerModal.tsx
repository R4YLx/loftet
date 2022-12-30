import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import clsx from 'clsx'
import { HamburgerModalProps } from './HamburgerModal.types'
import styles from './HamburgerModal.module.scss'

const HamburgerModal = ({
  isOpen,
  setIsOpen,
  children,
  className
}: HamburgerModalProps) => {
  // Closes modal on `Escape`
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !isOpen) {
      setIsOpen()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [isOpen])

  const modal = (
    <dialog
      className={clsx(styles.Root, className)}
      role="dialog"
      aria-label="modal"
      aria-expanded={isOpen}
      aria-modal
    >
      <div className={styles.Root__wrapper}>{children}</div>
    </dialog>
  )

  return !isOpen
    ? ReactDOM.createPortal(
        modal,
        document.querySelector('#__next') as HTMLElement
      )
    : null
}

export default HamburgerModal
