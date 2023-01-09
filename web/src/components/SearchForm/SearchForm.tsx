import { useRef, useState } from 'react'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState<string>('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!inputRef.current?.value.length) {
      return
    }

    setSearch(inputRef.current.value)
    inputRef.current.value = ''
  }

  console.log('search', search)

  return (
    <form className={styles.Root} onSubmit={handleSubmit}>
      <input
        className={styles.Root__inputField}
        required
        type="text"
        placeholder="Search..."
        ref={inputRef}
      />
    </form>
  )
}

export default SearchForm
