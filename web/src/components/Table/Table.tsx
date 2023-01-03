import { TableProps } from './Table.types'
import styles from './Table.module.scss'

const Table = ({ items }: TableProps) => {
  const subtotal = items.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  )

  return (
    <table className={styles.Root}>
      <thead className={styles.Root__thead}>
        <tr>
          <th className={styles.Root__th}>Item</th>
          <th className={styles.Root__th}>Qty</th>
          <th className={styles.Root__th}>Price</th>
        </tr>
      </thead>

      <tbody className={styles.Root__tbody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.Root__td}>{item.description}</td>
            <td className={styles.Root__td}>{item.quantity}</td>
            <td className={styles.Root__td}>
              {item.price.unit_amount / 100} SEK
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot className={styles.Root__tfoot}>
        <tr>
          <td></td>
          <th className={styles.Root__th}>Total</th>
          <td className={styles.Root__td}>{subtotal} SEK</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table
