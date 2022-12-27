import { IImage } from './Image.types'
import styles from './Image.module.scss'
import clsx from 'clsx'

const Image = ({ isFluid, src, ...rest }: IImage) => {
  const imageStyles = clsx(
    styles.Root,
    rest.className,
    isFluid && styles.Root_isFullWidth
  )

  return <img className={imageStyles} src={src} {...rest} />
}

export default Image
