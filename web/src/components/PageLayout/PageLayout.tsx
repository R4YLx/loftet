import { useState } from 'react'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import HamburgerModal from '@components/HamburgerModal'
import CategoryAccordion from '@components/CategoryAccordion'
import { PageLayoutProps } from './PageLayout.types'

const PageLayout = ({ children }: PageLayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(!menuOpen)} />

      {menuOpen && (
        <HamburgerModal setIsOpen={() => setMenuOpen(!menuOpen)}>
          <CategoryAccordion />
        </HamburgerModal>
      )}

      {!menuOpen && (
        <>
          {children}

          <Footer />
        </>
      )}
    </>
  )
}

export default PageLayout
