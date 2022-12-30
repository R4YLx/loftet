import React from 'react'

export interface SelectMenuProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  value: string
}
