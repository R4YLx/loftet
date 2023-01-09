import Image from '@components/Image/Image'
import { urlFor } from '@lib/sanity.config'
import { Carousel } from 'react-responsive-carousel'
import { ImageCarouselProps } from './ImageCarousel.types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './ImageCarousel.module.scss'

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const imageBuilds = images.map((image) => urlFor(image).url())
  return (
    <Carousel
      className={styles.Root}
      showThumbs={false}
      showArrows
      useKeyboardArrows
      swipeable
      emulateTouch
      showStatus={false}
    >
      {imageBuilds.map((image, i) => (
        <Image key={i} src={image} className={styles.Root__image} />
      ))}
    </Carousel>
  )
}

export default ImageCarousel
