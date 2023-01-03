export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFluid?: boolean
  isLoading?: boolean
  light?: boolean
  dark?: boolean
  bgDark?: boolean
  block?: boolean
}
