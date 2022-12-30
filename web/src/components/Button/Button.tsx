import clsx from 'clsx'
import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button = ({
  isFluid,
  light,
  dark,
  bgDark,
  block,
  ...rest
}: ButtonProps) => {
  const btnStyles = clsx(
    styles.Root,
    rest.className,
    isFluid && styles.Root_fullWidth, // Full width
    light && styles.Root_light, // Light border with light text
    dark && styles.Root_dark, // Dark border with dark text
    bgDark && styles.Root_bgDark, // Filled dark button with light text
    block && styles.Root_block // min width creating block button
  )

  return <button {...rest} className={btnStyles}></button>
}

export default Button
