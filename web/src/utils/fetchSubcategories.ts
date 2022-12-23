export const fetchSubcategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSubcategories`
  )

  const data = await res.json()

  const subcategories: Subcategory[] = data.subcategories

  return subcategories
}
