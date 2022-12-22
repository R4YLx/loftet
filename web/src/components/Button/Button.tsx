import clsx from 'clsx'
import { IButton } from './Button.types'
import styles from './Button.module.scss'

const Button = ({ isFluid, light, dark, bgDark, ...rest }: IButton) => {
  const btnStyles = clsx(
    styles.Root,
    isFluid && styles.Root_fullWidth, // Full width
    light && styles.Root_light, // Light border with light text
    dark && styles.Root_dark, // Dark border with dark text
    bgDark && styles.Root_bgDark // Filled dark button with light text
  )

  return <button {...rest} className={btnStyles}></button>
}

export default Button
