import clsx from 'clsx'
import { ImageProps } from './Image.types'
import styles from './Image.module.scss'

const Image = ({ isFluid, src, ...rest }: ImageProps) => {
  const imageStyles = clsx(
    styles.Root,
    rest.className,
    isFluid && styles.Root_isFullWidth
  )

  return <img className={imageStyles} src={src} {...rest} />
}

export default Image
