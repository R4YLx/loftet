import clsx from 'clsx'
import { HeadlineProps } from './Headline.types'
import styles from './Headline.module.scss'

const Headline = ({ element, children, size, className }: HeadlineProps) => {
  const Element = element

  const headingStyle = clsx(styles.Root, styles[`Root_size_${size}`], className)

  return <Element className={headingStyle}>{children}</Element>
}

export default Headline
