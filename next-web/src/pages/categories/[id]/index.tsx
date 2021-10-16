// カテゴリ詳細

import Link from "next/link"
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
      <Link href={`/categories`}>もどる</Link>
      <Link href={`${categoryId}/edit`}>編集</Link>
      <dl>
        <dt>カテゴリ名</dt>
        <dd>{category?.name}</dd>
      </dl>
    </>
  )
}

export default CategoriesShow
