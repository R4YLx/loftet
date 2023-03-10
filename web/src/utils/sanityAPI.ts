export const fetchProducts = async (lastest?: string): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products"] | order(_createdAt desc)${
      lastest ? '[0..11]' : ''
    }{...,
        categories[]->{
          slug,
          title
        }
    }`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}

export const fetchProductById = async (slug: string): Promise<IProduct> => {
  const query = encodeURIComponent(
    `*[_type == "products" && _id == "${slug}"][0]{
        ...,
        categories[]->{
          slug
        }
      }`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const product: IProduct = data.result

  return product
}

export const fetchSimilarProducts = async (
  productId: string,
  category: string
): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
      && _id != "${productId}"
      && references(*[_type=="categories" 
      && slug.current == "${category}"]._id)][0...11]`
  )
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}

export const fetchProductsByCategory = async (
  slug: string
): Promise<IProduct[]> => {
  const query = encodeURIComponent(
    `*[_type == "products" 
      && references(*[_type=="categories" 
      && slug.current == "${slug}"]._id)] | order(_updatedAt asc)`
  )

  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const products: IProduct[] = data.result

  return products
}

export const patchProductQuantity = async (products: IProduct[]) => {
  const url = `${process.env.NEXT_PUBLIC_SANITY_PATCH_URL}`

  products.forEach((product) => {
    const mutations = [
      {
        patch: {
          id: product._id,
          set: {
            quantity: product.quantity - 1
          }
        }
      }
    ]

    fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`
      },
      body: JSON.stringify({ mutations })
    })
      .then((res) => res.json())
      .then((result) => result)
      .catch((error) => error)
  })
}

export const fetchBlocks = async (type: string) => {
  const query = encodeURIComponent(`*[_type == "${type}"]`)
  const url = `${process.env.NEXT_PUBLIC_SANITY_API_URL}query=${query}`
  const data = await fetch(url).then((res) => res.json())
  const blocks: IHeroBlock[] | IInfoBlock[] = data.result

  return blocks
}
