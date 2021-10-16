import { useCallback, useState } from "react"

/**
 * form要素にnameをつけることで，フォーム値の更新を良い感じにできるようにする
 * @example
 * const { form, handleFormChange } = useForm({ first: '', last: '' })
 * // 略
 * <input name="first" onChange={handleFormChange} />
 * <input name="last" onChange={handleFormChange} />
 */
export const useForm = <T>(initialValue: T) => {
  const [form, setForm] = useState(initialValue)
  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
      },
      [form]
    )

  return { form, setForm, handleFormChange }
}
