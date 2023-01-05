export const textToArray = (text: string) => {
  const result = text.split(',')
  return result
}

export const sortLowToHigh = (products: IProduct[]) => {
  const copy = [...products]
  copy.sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))

  return copy
}

export const sortHighToLow = (products: IProduct[]) => {
  const copy = [...products]
  copy.sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))

  return copy
}

export const sortNewToOld = (products: IProduct[]) => {
  const copy = [...products]
  copy.sort((a, b) =>
    a._createdAt > b._createdAt ? 1 : b._createdAt > a._createdAt ? -1 : 0
  )

  return copy
}

export const setDefault = (products: IProduct[]) => {
  const copy = [...products]
  copy.sort((a, b) =>
    a._updatedAt > b._updatedAt ? 1 : b._updatedAt > a._updatedAt ? -1 : 0
  )

  return copy
}
