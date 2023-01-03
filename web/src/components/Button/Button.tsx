import clsx from 'clsx'
import { TailSpin } from 'react-loader-spinner'
import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button = ({
  isFluid,
  isLoading,
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
    isLoading && styles.Root_isLoading, // Loading
    light && styles.Root_light, // Light border with light text
    dark && styles.Root_dark, // Dark border with dark text
    bgDark && styles.Root_bgDark, // Filled dark button with light text
    block && styles.Root_block // min width creating block button
  )

  if (isLoading) {
    return (
      <button {...rest} className={btnStyles}>
        <TailSpin
          height="30"
          width="30"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          visible={true}
        />
      </button>
    )
  }

  return <button {...rest} className={btnStyles}></button>
}

export default Button
