import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { CiSearch } from 'react-icons/ci'
import { BsBag } from 'react-icons/bs'
import Text from '@components/Text'
import Button from '@components/Button'
import { INavbar } from './Navbar.types'
import { categories } from 'utils/categories'
import styles from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = ({ menuOpen, setMenuOpen }: INavbar) => {
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
            onClick={setMenuOpen}
          >
            {!menuOpen ? <RxHamburgerMenu size={30} /> : <RxCross2 size={30} />}
          </Button>
        </div>

        <div className={styles.Root__logoWrapper}>
          <img src="/logo.svg" alt="logo" className={styles.Root__logo} />
        </div>

        <ul className={styles.Root__menuList}>
          {categories.map((category) => (
            <Link key={category.id} href={category.slug}>
              <a>
                <li>{category.title}</li>
              </a>
            </Link>
          ))}
        </ul>

        <div className={styles.Root__icons}>
          <CiSearch size={27} />
          <BsBag size={22} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
