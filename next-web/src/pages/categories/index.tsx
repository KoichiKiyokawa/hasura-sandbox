import Link from "next/link"
import { Fragment, useEffect, useMemo, useState } from "react"
import {
  useGetCategoriesWithProductQuery,
  useUpdateCategoryMutation,
} from "src/generated/gql"

const CategoriesIndex = () => {
  const { data, loading, error } = useGetCategoriesWithProductQuery()

  const categoryWithProducts = useMemo(
    () =>
      data?.categories.flatMap((category) => ({
        ...category,
        products: category.product_categories.map((pc) => pc.product),
      })) ?? [],
    [data]
  )

  const [updateCategory, { loading: submitting }] = useUpdateCategoryMutation()

  const [isEditList, setIsEditList] = useState<boolean[]>([])
  useEffect(() => {
    setIsEditList(categoryWithProducts.map(() => false))
  }, [categoryWithProducts])

  const toggleEditMode = (index: number) => {
    setIsEditList(
      isEditList.map((isEdit, i) => (i === index ? !isEdit : isEdit))
    )
  }

  const handleEdit = (
    e: React.FormEvent<HTMLFormElement>,
    index: number,
    id: string
  ) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const submittingData = Object.fromEntries(formData.entries()) as {
      name: string
    }
    updateCategory({ variables: { id, object: submittingData } }).then(() => {
      toggleEditMode(index)
    })
  }

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
            {isEditList[i] ? (
              <>
                <form
                  onSubmit={(e) => handleEdit(e, i, categoryWithProduct.id)}
                >
                  <input name="name" defaultValue={categoryWithProduct.name} />
                  <button disabled={submitting}>確定</button>
                </form>
                <button onClick={() => toggleEditMode(i)}>キャンセル</button>
              </>
            ) : (
              <>
                <Link href={`/categories/${categoryWithProduct.id}`}>
                  {categoryWithProduct.name}
                </Link>

                <button onClick={() => toggleEditMode(i)}>edit</button>
              </>
            )}
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
