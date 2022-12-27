import React from 'react'

export interface IProductCard
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string
  price: number
  size: string
  imageSrc: string
}
