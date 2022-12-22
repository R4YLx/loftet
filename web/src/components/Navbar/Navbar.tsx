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
      <nav></nav>
    </div>
  )
}

export default Navbar
