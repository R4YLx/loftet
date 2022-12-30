import clsx from 'clsx'
import { DividerProps } from './Divider.types'
import styles from './Divider.module.scss'

const Divider = ({ subtle, className }: DividerProps) => {
  const dividerStyles = clsx(
    styles.Root,
    subtle && styles.Root_subtle,
    className
  )

  return <div className={dividerStyles}></div>
}

export default Divider
