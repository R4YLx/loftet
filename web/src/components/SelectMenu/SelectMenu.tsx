import styles from './SelectMenu.module.scss'
import { SelectMenuProps } from './SelectMenu.types'

const SelectMenu = ({ value }: SelectMenuProps) => {
  return (
    <div className={styles.Root}>
      <select className={styles.Root__select}>
        <option value={value}>{value}</option>
      </select>
    </div>
  )
}

export default SelectMenu
