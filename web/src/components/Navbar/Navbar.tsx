import Link from 'next/link'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { CiSearch } from 'react-icons/ci'
import { BsBag } from 'react-icons/bs'
import { categories } from '@lib/categories'
import Text from '@components/Text'
import Button from '@components/Button'
import { NavbarProps } from './Navbar.types'
import styles from './Navbar.module.scss'
import { useCartStore } from '@store/store'
import { useEffect, useState } from 'react'
import SearchForm from '@components/SearchForm'

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const { itemsInCart } = useCartStore()
  const [loadLS, setLoadLS] = useState(false)
  const [showSearchField, setShowSearchField] = useState(false)

  useEffect(() => {
    setLoadLS(true)
  }, [])

  return (
    <div className={styles.Root}>
      {/* Top label */}
      <div className={styles.Root__topLabel}>
        <Text element="span" size="lg">
          Free shipping worldwide
        </Text>
      </div>

      {/* Navbar */}
      <nav className={styles.Root__navbar}>
        <div className={styles.Root__hamburger}>
          <Button
            aria-label="hamburger button"
            className={styles.Root__hamburger__button}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? <RxHamburgerMenu size={30} /> : <RxCross2 size={30} />}
          </Button>
        </div>

        <div className={styles.Root__logoWrapper}>
          <Link href={'/'}>
            <a className={styles.Root__logoLink} aria-label="Logo">
              <img
                src="/logo.png"
                alt="logo"
                className={styles.Root__logo}
                onClick={() => setMenuOpen(false)}
              />
            </a>
          </Link>
        </div>

        {/* List with collections */}
        <ul className={styles.Root__menuList}>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/collection/${category.slug}`}>
                <a>{category.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Search and cart icon*/}
        <div className={styles.Root__icons}>
          <Button
            aria-label="search button"
            className={styles.Root__searchButton}
            onClick={() => setShowSearchField(!showSearchField)}
          >
            <CiSearch size={27} />
          </Button>

          <Link href={'/cart'}>
            <a aria-label="Check out with your new items">
              <div className={styles.Root__cartContainer}>
                {loadLS && itemsInCart.length > 0 && (
                  <Text
                    element="span"
                    size="sm"
                    className={styles.Root__itemsInCart}
                  >
                    {itemsInCart.length}
                  </Text>
                )}
                <BsBag size={22} />
              </div>
            </a>
          </Link>
        </div>
      </nav>

      {showSearchField && (
        <div className={styles.Root__searchForm}>
          <SearchForm setShowSearchField={setShowSearchField} />
        </div>
      )}
    </div>
  )
}

export default Navbar
