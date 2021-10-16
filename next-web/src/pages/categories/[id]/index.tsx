// カテゴリ詳細

import { Loading } from "src/components/navigators/Loading"
import { useGetCategoryByIdQuery } from "src/generated/gql"
import { useParams } from "src/hooks/param"

const CategoriesShow = () => {
  const categoryId = useParams("id")
  const { data, loading } = useGetCategoryByIdQuery({
    variables: { id: categoryId },
  })
  const category = data?.categories[0]

  if (loading) return <Loading />

  return (
    <>
      <h1>categories show</h1>
      <dl>
        <dt>カテゴリ名</dt>
        <dd>{category?.name}</dd>
      </dl>
    </>
  )
}

export default CategoriesShow
