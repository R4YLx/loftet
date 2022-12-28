import clsx from 'clsx'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

import { IHamburgerModal } from './HamburgerModal.types'
import styles from './Modal.module.scss'

const HamburgerModal = ({
  isOpen,
  setIsOpen,
  children,
  className
}: IHamburgerModal) => {
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
