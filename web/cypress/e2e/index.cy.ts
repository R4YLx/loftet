it('Checking available products', () => {
  const product = `[aria-label="Check out Vtg Levi's Lined Denim Trucker Jacket"]`
  const productTwo =
    '[aria-label="Check out Vtg Santarossa Mosaic & Tile sports jacket"]'
  const productThree =
    '[aria-label="Check out Vtg 1940s Swedish Army Extreme Cold Weather Shearling Coat"]'

  const logo = '[aria-label="Logo"]'
  const addToCartBtn = '[aria-label="Add to cart"]'
  const slider = '.ProductsSlider_Root__wrapper__CeOkH'
  const backBtn = '[aria-label="Back button"]'

  cy.visit('http://localhost:3000')
  cy.get(product).click()

  cy.get(logo).click()

  cy.get(productTwo).click()

  cy.get(addToCartBtn).should('not.be.disabled')

  cy.scrollTo('0%', '50%', { duration: 2000 })

  cy.get(slider).should('not.be.empty').scrollTo('right', { duration: 2000 })

  cy.get(slider).children().should('have.length', 11)

  cy.get(addToCartBtn).should('not.be.disabled')

  cy.get(productThree).click()
  cy.get(addToCartBtn).should('not.be.disabled')

  cy.get(backBtn).click()
})

it('checking unavailable products', () => {
  const product =
    '[aria-label="Check out Vtg Chevron Shipping Quality Nylon Jacket"]'
  const productTwo = '[aria-label="Check out Vtg Iowa Sports Jacket"]'

  const colorRed = 'rgb(204, 0, 0)' // rgb for #cc0000
  const addToCartBtn = '[aria-label="Add to cart"]'

  cy.visit('http://localhost:3000')

  cy.get(product).click()

  cy.get('h3').contains('OUT OF STOCK').should('have.css', 'color', colorRed)

  cy.get(addToCartBtn).should('be.disabled')

  cy.scrollTo('0%', '50%', { duration: 2000 })

  cy.get(productTwo).click()

  cy.get('h3').contains('OUT OF STOCK').should('have.css', 'color', colorRed)

  cy.get(addToCartBtn).should('be.disabled')
})

// describe('Navigation', () => {
//   it('Testing hamburger menu', () => {
//     cy.visit('http://localhost:3000')
//   })
// })

// describe('Buy products', () => {
//   it('Adding products', () => {
//     cy.visit('http://localhost:3000')

// const addToCartBtn = '[aria-label="Add to cart"]'
// cy.get(addToCartBtn).click()

// const checkoutBtn = '[aria-label="Check out with your new items"]'
// cy.get(checkoutBtn).click()

export {}
