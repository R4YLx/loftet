import * as Accordion from '@radix-ui/react-accordion'

import styles from './CategoryAccordion.module.scss'

const CategoryAccordion = () => {
  return (
    <div className={styles.Root}>
      <Accordion.Root>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content />
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}

export default CategoryAccordion
