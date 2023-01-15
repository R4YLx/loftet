import Image from 'next/image'
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
        <div key={i} className={styles.Root__imageWrapper}>
          <Image layout="fill" objectFit="contain" src={image} priority />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
