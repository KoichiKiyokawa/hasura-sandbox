import { useCallback, useState } from "react"

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
