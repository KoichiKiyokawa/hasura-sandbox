import { useRouter } from "next/router"
import { useEffect } from "react"
import { Loading } from "src/components/navigators/Loading"
import { ERROR_MESSAGES } from "src/constants/error"
import {
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
} from "src/generated/gql"
import { useForm } from "src/hooks/form"
import { useParams } from "src/hooks/param"

const CategoriesEdit = () => {
  const router = useRouter()
  const categoryId = useParams("id")

  const { data, loading } = useGetCategoryByIdQuery({
    variables: { id: categoryId },
  })
  const category = data?.categories[0]
  const [updateCategory, { loading: submitting }] = useUpdateCategoryMutation()
  const { form, setForm, handleFormChange } = useForm({ name: category?.name })
  useEffect(() => {
    setForm({ name: category?.name })
  }, [setForm, category])

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    updateCategory({ variables: { id: categoryId, object: form } })
      .then(() => {
        router.push(`/categories/${categoryId}`)
      })
      .catch(() => alert(ERROR_MESSAGES.DEFAULT_NETWORK_ERROR))
  }

  if (loading) return <Loading />

  return (
    <>
      <h1>categories edit</h1>
      <form onSubmit={onSubmit}>
        <input name="name" onChange={handleFormChange} value={form?.name} />
        <button disabled={loading || submitting}>更新</button>
      </form>
    </>
  )
}

export default CategoriesEdit
