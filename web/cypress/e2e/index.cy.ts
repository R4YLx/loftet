const smallerScreensSizes: Cypress.ViewportPreset[] = [
  'iphone-8',
  'iphone-x',
  'ipad-mini',
  'ipad-2'
]

describe('E2E on smaller screens', () => {
  smallerScreensSizes.forEach((size: Cypress.ViewportPreset) => {
    // Setting viewport for every size and entering website
    beforeEach(() => {
      cy.viewport(size)
      cy.visit('http://localhost:3000')
    })

    it(`Checking available products on device: "${size}"`, () => {
      const product = `[aria-label="Check out Vtg Levi's Lined Denim Trucker Jacket"]`
      const productTwo =
        '[aria-label="Check out Vtg Santarossa Mosaic & Tile sports jacket"]'
      const productThree =
        '[aria-label="Check out Vtg 1940s Swedish Army Extreme Cold Weather Shearling Coat"]'

      const logo = '[aria-label="Logo"]'
      const addToCartBtn = '[aria-label="Add to cart"]'
      const slider = '.ProductsSlider_Root__wrapper__CeOkH'
      const backBtn = '[aria-label="Back button"]'

      // testing click on product
      cy.get(product).click()

      // testing logo routes to home page
      cy.get(logo).click()

      // testing click on antoher product
      cy.get(productTwo).click()

      // asserting button is not disabled and has corrrect text
      cy.get(addToCartBtn)
        .should('contain', 'Add to cart')
        .and('not.be.disabled')

      // Scrolling down to slider
      cy.scrollTo('0%', '50%', { duration: 2000 })

      // testing slider to contain products and scroll to work
      cy.get(slider)
        .should('not.be.empty')
        .scrollTo('right', { duration: 2000 })

      // asserting there is products in slider
      cy.get(slider).children().should('have.length', 11)

      // asserting button is not disabled and has corrrect text
      cy.get(addToCartBtn)
        .should('contain', 'Add to cart')
        .and('not.be.disabled')

      // testing click on antoher product
      cy.get(productThree).click()

      // asserting button is not disabled and has corrrect text
      cy.get(addToCartBtn)
        .should('contain', 'Add to cart')
        .and('not.be.disabled')

      // testing back button
      cy.get(backBtn).click()
    })

    it(`checking unavailable products on device: "${size}"`, () => {
      const product =
        '[aria-label="Check out Vtg Chevron Shipping Quality Nylon Jacket"]'
      const productTwo = '[aria-label="Check out Vtg Iowa Sports Jacket"]'
      const colorRed = 'rgb(204, 0, 0)' // rgb for #cc0000
      const addToCartBtn = '[aria-label="Add to cart"]'

      // testing click on product
      cy.get(product).click()

      // asserting product prize is out of stock and has color red
      cy.get('h3')
        .contains('OUT OF STOCK')
        .should('have.css', 'color', colorRed)

      // asserting button is disabled
      cy.get(addToCartBtn).should('be.disabled')

      // scrolling to slider
      cy.scrollTo('0%', '50%', { duration: 2000 })

      // testing click on another unavailable product
      cy.get(productTwo).click()

      // asserting product prize is out of stock and has color red
      cy.get('h3')
        .contains('OUT OF STOCK')
        .should('have.css', 'color', colorRed)

      // asserting button is disabled
      cy.get(addToCartBtn).should('be.disabled')
    })

    it(`Testing hamburger menu on device: "${size}"`, () => {
      const hamburgerBtn = '[aria-label="hamburger button"]'
      const chevron = '[data-cy="chevron"]'

      // testing clicking on hamburger menu
      cy.get(hamburgerBtn).click().click().click()

      // testing clicking on every chevron
      cy.get(chevron).siblings().eq(0).click().click()
      cy.get(chevron).siblings().eq(1).click().click()
      cy.get(chevron).siblings().eq(2).click().click()
      cy.get(chevron).siblings().eq(3).click().click()
      cy.get(chevron).siblings().eq(4).click().click()
      cy.get(chevron).siblings().eq(5).click().click().click()

      // testing link works on click
      cy.get('a').contains('All military').click()

      // asserting path name is correct
      cy.location('pathname').should('eq', '/collection/military')

      // go back to previous page
      cy.go('back')
    })

    it(`Adding products to cart, removing item from cart and checkout on device: "${size}"`, () => {
      const product = `[aria-label="Check out Vtg Levi's Lined Denim Trucker Jacket"]`
      const productTwo =
        '[aria-label="Check out Vtg US Army Veteran Nylon Jacket"]'
      const productThree =
        '[aria-label="Check out Vtg 1970s US Army OG-107 Ripstop Jungle Jacket"]'
      const carouselNextBtn = '[aria-label="next slide / item"]'
      const carouselPrevBtn = '[aria-label="previous slide / item"]'
      const addToCartBtn = '[aria-label="Add to cart"]'
      const cartBtn = '[aria-label="Check out with your new items"]'
      const itemsInCart = `${cartBtn} > div > span`
      const removeItemBtn = '[aria-label="Remove item"]'
      const checkoutBtn = '[aria-label="Check out"]'

      // Click on product, testing carousel and add product to cart
      cy.get(product).click()
      cy.get(carouselNextBtn).click().click()
      cy.get(carouselPrevBtn).click().click()
      cy.wait(1000)
      cy.get(addToCartBtn).click()

      // Click on product, testing carousel and add second product to cart
      cy.get(productTwo).click()
      cy.get(carouselNextBtn).click().click()
      cy.get(carouselPrevBtn).click().click()
      cy.wait(1000)
      cy.get(addToCartBtn).click()

      // Click on product, testing carousel and add third product to cart
      cy.get(productThree).click()
      cy.get(carouselNextBtn).click().click()
      cy.get(carouselPrevBtn).click().click()
      cy.wait(1000)
      cy.get(addToCartBtn).click()

      // click on check out button to go to cart
      cy.wait(1000)
      cy.get(cartBtn).click()

      // asserts span of items in cart is visible and contains three items
      cy.wait(1000)
      cy.get(itemsInCart).should('be.visible').contains('3')

      // click to remove last item
      cy.get(removeItemBtn).eq(2).click()

      // testing if items reduced after removing one item
      cy.wait(1000)
      cy.get(itemsInCart).contains('2')

      // testing if button is enabled
      cy.get(checkoutBtn).should('be.enabled')
    })
  })
})

const largerScreenSizes = [
  'macbook-13',
  'macbook-15',
  'macbook-16',
  [1920, 1080],
  [2560, 1440],
  [3840, 2160]
]

describe('E2E on larger devices', () => {
  largerScreenSizes.forEach((size) => {
    // Setting viewport for every size and entering website
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size as Cypress.ViewportPreset)
      }

      cy.visit('http://localhost:3000')
    })

    it(`Click all links on screen size: ${size}`, () => {
      const menuList = '.Navbar_Root__menuList__xD3V_'

      // asserts menu is visible on larger screens
      cy.get(menuList).should('be.visible')

      // asserts links to have href and redirects
      cy.get(`${menuList} > li > a`)
        .each(($el) => {
          cy.wrap($el).should('have.attr', 'href')
        })
        .click({ multiple: true })
    })
  })
})

export {}
