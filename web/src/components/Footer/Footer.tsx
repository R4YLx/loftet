import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.Root}>
      <div className={styles.Root__topSection}>
        <img src="/logo.svg" alt="logo" className={styles.Root__logo} />

        <div className={styles.Root__socialsContainer}>
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </footer>
  )
}

export default Footer
