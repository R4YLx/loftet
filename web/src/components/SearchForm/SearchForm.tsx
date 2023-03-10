import { useRouter } from 'next/router'
import { useRef } from 'react'
import { SearchFormProps } from './SearchForm.types'
import styles from './SearchForm.module.scss'

const SearchForm = ({ setShowSearchField, ...rest }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!inputRef.current?.value.length) {
      return
    }

    router.push({
      pathname: `/search`,
      query: { result: inputRef.current.value }
    })

    inputRef.current.value = ''
    if (!setShowSearchField) return
    setShowSearchField(false)
  }

  return (
    <form className={styles.Root} onSubmit={handleSubmit} {...rest}>
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
