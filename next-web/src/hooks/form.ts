import { useCallback, useState } from 'react'

/**
 * form要素にnameをつけることで，フォーム値の更新を良い感じにできるようにする
 * @example
 * const { form, handleFormChange } = useForm({ first: '', last: '' })
 * // 略
 * <input name="first" onChange={handleFormChange} />
 * <input name="last" onChange={handleFormChange} />
 *
 * registerメソッドを使うことで，name部分を型安全にすることもできる．
 * const { form, register, handleFormChange } = useForm({ first: '', last: '' })
 * // 略
 * <input {...register('first')} onChange={handleFormChange} />
 * <input {...register('last')} onChange={handleFormChange} />
 */
export const useForm = <T>(initialValue: T) => {
  const [form, setForm] = useState(initialValue)
  const register = (name: keyof T) => ({ name })
  const handleFormChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
      },
      [form]
    )

  return { form, setForm, register, handleFormChange }
}
