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

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => {
  const { itemsInCart } = useCartStore()
  const [loadLS, setLoadLS] = useState(false)

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
            <a className={styles.Root__logoLink}>
              <img
                src="/logo.png"
                alt="logo"
                className={styles.Root__logo}
                onClick={() => setMenuOpen(false)}
              />
            </a>
          </Link>
        </div>

        <ul className={styles.Root__menuList}>
          {categories.map((category) => (
            <Link key={category.id} href={`/collection/${category.slug}`}>
              <a>
                <li>{category.title}</li>
              </a>
            </Link>
          ))}
        </ul>

        <div className={styles.Root__icons}>
          <Link href={'/'}>
            <a>
              <CiSearch size={27} />
            </a>
          </Link>

          <Link href={'/cart'}>
            <a>
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
    </div>
  )
}

export default Navbar
