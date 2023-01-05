import React from 'react'

export interface SelectMenuProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  option?: string
  options?: {
    value: string
    label: string
  }[]
  handleOptions?: (option: string) => void
  isFluid?: boolean
  sizeSelection?: boolean
}
