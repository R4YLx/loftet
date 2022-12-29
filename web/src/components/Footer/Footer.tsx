import Link from 'next/link'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import Button from '@components/Button'
import Divider from '@components/Divider'
import Text from '@components/Text'
import styles from './Footer.module.scss'

// List of pages
const listItems = [
  'About',
  'Contact',
  'FAQ',
  'Use & care',
  'Size care',
  'Shipping & returns',
  'Terms',
  'Privacy policy',
  'Carrers'
]

const Footer = () => {
  return (
    <footer className={styles.Root}>
      {/* Wraps everything except bottom copy label */}
      <div className={styles.Root__wrapper}>
        {/* Wraps logo and socials */}
        <div className={styles.Root__topSection}>
          <Link href={'/'}>
            <a>
              <img src="/logo.svg" alt="logo" className={styles.Root__logo} />
            </a>
          </Link>

          <div className={styles.Root__socialsContainer}>
            <Link href={'/'}>
              <a>
                <BsFacebook />
              </a>
            </Link>

            <Link href={'/'}>
              <a>
                <BsInstagram />
              </a>
            </Link>

            <Link href={'/'}>
              <a>
                <BsTwitter />
              </a>
            </Link>
          </div>

          <Divider />
        </div>

        <div className={styles.Root__midSection}>
          {/* List of pages */}
          <ul className={styles.Root__listWrapper}>
            {listItems.map((item, i) => (
              <Link key={i} href={'#'}>
                <a>
                  <li className={styles.Root__listItem}>
                    <Text element="span" size="lg">
                      {item.toLocaleUpperCase()}
                    </Text>
                  </li>
                </a>
              </Link>
            ))}
          </ul>

          {/* Subscribe section */}
          <div className={styles.Root__inputWrapper}>
            <Text element="p" size="sm">
              Subscribe to get special offers, free giveaways, and
              once-in-a-lifetime deals.
            </Text>

            {/* Wrapper for input and button */}
            <div className={styles.Root__subscribeWrapper}>
              <input
                placeholder="Your email address"
                className={styles.Root__inputField}
              />

              <Button bgDark className={styles.Root__button}>
                <Text
                  element="span"
                  size="md"
                  className={styles.Root__button__text}
                >
                  subscribe
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom label with copy */}
      <div className={styles.Root__bottomLabel}>
        <Text element="p" size="md">
          © 2023 LOFTET. All rights reserved
        </Text>
      </div>
    </footer>
  )
}

export default Footer
