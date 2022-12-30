import styles from './SelectMenu.module.scss'
import { SelectMenuProps } from './SelectMenu.types'

const SelectMenu = ({ value }: SelectMenuProps) => {
  return (
    <select className={styles.Root}>
      <option value={value}>{value}</option>
    </select>
  )
}

export default SelectMenu
