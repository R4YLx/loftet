import { Dispatch, SetStateAction } from 'react'

export interface CategoryAccordionProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
