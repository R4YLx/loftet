import styles from './SelectMenu.module.scss'
import { SelectMenuProps } from './SelectMenu.types'

const SelectMenu = ({ option, options, handleOptions }: SelectMenuProps) => {
  if (options && handleOptions) {
    const orderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
      handleOptions(e.target.value)
    }

    return (
      <select className={styles.Root} onChange={orderBy}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }

  return (
    <select className={styles.Root}>
      <option value={option}>{option}</option>
    </select>
  )
}

export default SelectMenu
