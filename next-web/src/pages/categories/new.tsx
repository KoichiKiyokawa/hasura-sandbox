import { useRouter } from "next/router"
import React, { useCallback, useEffect } from "react"
import { ERROR_MESSAGES } from "src/constants/error"
import { useCreateCategoryMutation } from "src/generated/gql"
import { useForm } from "src/hooks/form"

const CategoriesNew = () => {
  const router = useRouter()
  const { form, handleFormChange } = useForm({ name: "" })
  const [createCategory, { loading, error }] = useCreateCategoryMutation({
    variables: { object: { name: form.name } },
  })

  useEffect(() => {
    if (error) alert(ERROR_MESSAGES.DEFAULT_NETWORK_ERROR)
  }, [error])

  const onSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
    createCategory({ variables: { object: form } })
      .then(() => {
        router.push("/categories")
      })
      .catch(() => {
        alert(ERROR_MESSAGES.DEFAULT_NETWORK_ERROR)
      })
  }

  return (
    <>
      <h1>categories new</h1>
      <form onSubmit={onSubmit}>
        <label>
          カテゴリ名
          <input name="name" onChange={handleFormChange} />
        </label>
        <button disabled={loading}>作成</button>
      </form>
    </>
  )
}
export default React.memo(CategoriesNew)
