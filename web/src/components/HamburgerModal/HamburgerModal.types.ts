export interface IHamburgerModal
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  isOpen?: boolean
  setIsOpen: () => void
}
