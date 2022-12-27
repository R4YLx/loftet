import React from 'react'

export interface IProductCard
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  item: string
  price: number
  size: string
  image?: Image[]
}
