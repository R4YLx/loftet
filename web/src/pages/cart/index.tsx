import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '@redux/cartSlice'
import Divider from '@components/Divider'
import Headline from '@components/Headline'
import styles from './CartPage.module.scss'
import Button from '@components/Button'
import Text from '@components/Text'
import { useRouter } from 'next/router'
import CheckoutProductCard from '@components/CheckoutProductCard'

const CartPage = () => {
  const router = useRouter()
  const itemsInCart = useSelector(selectCartItems)
  const cartTotalSum = useSelector(selectCartTotal)
  const [isLoading, setIsLoading] = useState(false)

  const createCheckoutSession = async () => {
    setIsLoading(true)
  }

  const [groupedItemsInCart, setGroupedItemsInCart] = useState(
    {} as { [key: string]: IProduct[] }
  )

  useEffect(() => {
    const groupedItems = itemsInCart.reduce((results, item) => {
      ;(results[item._id] = results[item._id] || []).push(item)
      return results
    }, {} as { [key: string]: IProduct[] })

    setGroupedItemsInCart(groupedItems)
  }, [itemsInCart])

  return (
    <div className={styles.Root}>
      <Headline element="h2" size="lg" className={styles.Root__headline}>
        Your cart
      </Headline>

      <Divider subtle />

      {itemsInCart.length <= 0 && (
        <div className={styles.Root__emptyCartContainer}>
          <Headline element="h3" size="lg">
            Oh no! It&apos;s empty...
          </Headline>

          <Button
            block
            bgDark
            onClick={() => router.push('/', undefined, { shallow: true })}
          >
            <Text element="p" size="lg">
              Continue shopping
            </Text>
          </Button>
        </div>
      )}

      {itemsInCart.length > 0 && (
        <div className={styles.Root__contentWrapper}>
          <section className={styles.Root__productsWrapper}>
            {Object.entries(groupedItemsInCart).map(([key, items]) => (
              <CheckoutProductCard key={key} products={items} />
            ))}
          </section>

          <Divider subtle />

          <section className={styles.Root__summaryWrapper}>
            <div className={styles.Root__textContainer}>
              <Text element="p" size="lg">
                Subtotal:
              </Text>
              <Text element="p" size="lg">
                {cartTotalSum} SEK
              </Text>
            </div>

            <div className={styles.Root__textContainer}>
              <Text element="p" size="lg">
                Shipping:
              </Text>

              <Text element="p" size="lg">
                Free
              </Text>
            </div>

            <div className={styles.Root__textContainer}>
              <Text element="p" size="lg">
                Grand total:
              </Text>

              <Text element="p" size="lg">
                {cartTotalSum} SEK
              </Text>
            </div>

            <Button block bgDark className={styles.Root__checkOutBtn}>
              <Text element="p" size="lg">
                Check out
              </Text>
            </Button>
          </section>
        </div>
      )}
    </div>
  )
}

export default CartPage
