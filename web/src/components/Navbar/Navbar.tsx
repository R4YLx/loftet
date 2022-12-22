import { RxHamburgerMenu } from 'react-icons/rx'
import { CiSearch } from 'react-icons/ci'
import { BsBag } from 'react-icons/bs'
import Text from '@components/Text'
import styles from './Navbar.module.scss'

const Navbar = () => {
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
          <RxHamburgerMenu size={30} />
        </div>

        <div className={styles.Root__logoWrapper}>
          <img src="logo/logo.svg" alt="logo" className={styles.Root__logo} />
        </div>

        <div className={styles.Root__icons}>
          <CiSearch size={30} />
          <BsBag size={25} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
