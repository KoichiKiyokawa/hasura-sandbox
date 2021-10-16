import Link from "next/link"
import { Fragment } from "react"
import { useGetCategoriesWithProductQuery } from "src/generated/gql"

const CategoriesIndex = () => {
  const { data, loading, error } = useGetCategoriesWithProductQuery()

  const categoryWithProducts =
    data?.categories.flatMap((category) => ({
      ...category,
      products: category.product_categories.map((pc) => pc.product),
    })) ?? []

  return (
    <>
      <Link href="/">トップに戻る</Link>
      <h1>category index</h1>
      {loading && <span>Loading...</span>}
      {error && <span>エラーが発生しました．</span>}

      <Link href="/categories/new">新規作成</Link>
      {categoryWithProducts.map((categoryWithProduct, i) => (
        <ul key={i}>
          <h2>
            <Link href={`/categories/${categoryWithProduct.id}`}>
              {categoryWithProduct.name}
            </Link>
          </h2>
          {categoryWithProduct.products.length === 0 && (
            <span>該当する商品はありません</span>
          )}
          {categoryWithProduct.products.map((product, productIndex) => (
            <Fragment key={`product-${productIndex}`}>
              <li>{product.name}</li>
              <li>&yen;{product.price}</li>
            </Fragment>
          ))}
        </ul>
      ))}
    </>
  )
}

export default CategoriesIndex
