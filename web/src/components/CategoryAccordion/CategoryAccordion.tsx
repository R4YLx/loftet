import { categories } from '@lib/categories'
import Link from 'next/link'
import { RxChevronDown } from 'react-icons/rx'
import * as Accordion from '@radix-ui/react-accordion'
import Text from '@components/Text'
import styles from './CategoryAccordion.module.scss'
import { CategoryAccordionProps } from './CategoryAccordion.types'

const CategoryAccordion = ({ isOpen, setIsOpen }: CategoryAccordionProps) => {
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
                <Link
                  key={subcategory.id}
                  href={`/collection/${subcategory.slug}`}
                >
                  <a>
                    <li
                      className={styles.Root__listItem}
                      onClick={() => (setIsOpen ? setIsOpen(!isOpen) : null)}
                    >
                      <Text
                        element="p"
                        size="lg"
                        className={styles.Root__listItem__text}
                      >
                        {subcategory.title}
                      </Text>
                    </li>
                  </a>
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
