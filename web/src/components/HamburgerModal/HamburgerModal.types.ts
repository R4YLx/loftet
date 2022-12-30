export interface HamburgerModalProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  isOpen?: boolean
  setIsOpen: () => void
}
