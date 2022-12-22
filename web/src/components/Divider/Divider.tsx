import clsx from 'clsx'
import { IDivider } from './Divider.types'
import styles from './Divider.module.scss'

const Divider = ({ subtle }: IDivider) => {
  const dividerStyles = clsx(styles.Root, subtle && styles.Root_subtle)

  return <div className={dividerStyles}></div>
}

export default Divider
