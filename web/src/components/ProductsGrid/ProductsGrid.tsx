import styles from './ProductsGrid.module.scss'

const ProductsGrid = ({ ...rest }) => {
  return <div className={styles.Root} {...rest} />
}

export default ProductsGrid
