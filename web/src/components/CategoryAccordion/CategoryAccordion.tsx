import * as Accordion from '@radix-ui/react-accordion'
import Link from 'next/link'
import { RxChevronDown } from 'react-icons/rx'
import { categories } from 'utils/categories'
import Text from '@components/Text'

import styles from './CategoryAccordion.module.scss'

const CategoryAccordion = () => {
  return (
    <Accordion.Root className={styles.Root}>
      {categories.map((category) => (
        <Accordion.Item
          key={category.id}
          value={category.value}
          className={styles.Root__item}
        >
          <Accordion.Trigger className={styles.Root__button}>
            <Text element="p" size="xl">
              {category.title}
            </Text>
            <RxChevronDown
              size={20}
              aria-hidden
              className={styles.Root__button__chevron}
            />
          </Accordion.Trigger>
          <Accordion.Content className={styles.Root__contentWrapper}>
            <ul className={styles.Root__list}>
              {category.subcategories.map((subcategory) => (
                <Link key={subcategory.id} href={subcategory.slug}>
                  <li className={styles.Root__listItem}>
                    <Text
                      element="p"
                      size="lg"
                      className={styles.Root__listItem__text}
                    >
                      {subcategory.title}
                    </Text>
                  </li>
                </Link>
              ))}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default CategoryAccordion
