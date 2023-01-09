import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
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
  }

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
