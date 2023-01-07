import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Stripe } from 'stripe'
import { getStripe } from '@utils/stripeAPI'
import { fetchPostJSON } from '@utils/fetchPostJSON'
import { useCartStore } from '@store/store'
import Divider from '@components/Divider'
import Headline from '@components/Headline'
import Button from '@components/Button'
import Text from '@components/Text'
import CheckoutProductCard from '@components/CheckoutProductCard'
import styles from './CartPage.module.scss'

const CartPage = () => {
  const router = useRouter()
  const { itemsInCart, cartTotalSum } = useCartStore()
  const [isLoading, setIsLoading] = useState(false)
  const [loadLS, setLoadLS] = useState(false)

  // Groups same products as one object. For future use.
  const [groupedItemsInCart, setGroupedItemsInCart] = useState(
    {} as { [key: string]: IProduct[] }
  )

  // Creates Stripe checkout session
  const createCheckoutSession = async () => {
    setIsLoading(true)

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      '/api/checkoutSessions',
      { items: itemsInCart }
    )

    if ((checkoutSession as any).statusCode === 500) {
      toast.error((checkoutSession as any).message)
    }

    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id
    })

    toast.error(error.message)
    setIsLoading(false)
  }

  useEffect(() => {
    setLoadLS(true)

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

      {/* If cart is empty, this renders */}
      {loadLS && itemsInCart.length <= 0 && (
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

      {/* If there is something in cart, this renders */}
      {loadLS && itemsInCart.length > 0 && (
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
                {loadLS && cartTotalSum} SEK
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
                {loadLS && cartTotalSum} SEK
              </Text>
            </div>

            <Button
              block
              bgDark
              className={styles.Root__checkOutBtn}
              onClick={createCheckoutSession}
              isLoading={isLoading}
            >
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
