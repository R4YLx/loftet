import clsx from 'clsx'
import { IText } from './Text.types'
import styles from './Text.module.scss'

const Text = ({ children, className, element, size }: IText) => {
  const Element = element

  const textStyles = clsx(styles.Root, styles[`Root_size_${size}`], className)

  return <Element className={textStyles}>{children}</Element>
}

export default Text
