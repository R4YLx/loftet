import clsx from 'clsx'
import { IHeadline } from './Headline.types'
import styles from './Headline.module.scss'

const Headline = ({ element, children, size, className }: IHeadline) => {
  const Element = element

  const headingStyle = clsx(styles.Root, styles[`Root_size_${size}`], className)

  return <Element className={headingStyle}>{children}</Element>
}

export default Headline
