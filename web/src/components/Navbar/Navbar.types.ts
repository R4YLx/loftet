import { Dispatch, SetStateAction } from 'react'

export interface NavbarProps {
  menuOpen: boolean
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}
