import clsx from 'clsx'
import { SelectMenuProps } from './SelectMenu.types'
import styles from './SelectMenu.module.scss'

const SelectMenu = ({
  option,
  options,
  handleOptions,
  className,
  isFluid,
  sizeSelection
}: SelectMenuProps) => {
  const selectStyles = clsx(
    styles.Root,
    className,
    isFluid && styles.Root_isFluid,
    sizeSelection && styles.Root_sizeSelection
  )

  if (options && handleOptions) {
    const orderBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
      handleOptions(e.target.value)
    }

    return (
      <select className={selectStyles} onChange={orderBy} value={option}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )
  }

  return (
    <select className={selectStyles}>
      <option value={option}>{option}</option>
    </select>
  )
}

export default SelectMenu
