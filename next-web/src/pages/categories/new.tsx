import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Text } from '@chakra-ui/layout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ERROR_MESSAGES } from 'src/constants/error'
import { useCreateCategoryMutation } from 'src/generated/gql'
import { useForm } from 'src/hooks/form'

const CategoriesNew = () => {
  const router = useRouter()
  const { form, register, handleFormChange } = useForm({ name: '' })
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
        router.push('/categories')
      })
      .catch(() => {
        alert(ERROR_MESSAGES.DEFAULT_NETWORK_ERROR)
      })
  }

  return (
    <Container>
      <Text as="h1" fontWeight="extrabold" fontSize="lg">
        categories new
      </Text>

      <form onSubmit={onSubmit}>
        <FormControl id="category-name">
          <FormLabel>カテゴリ名</FormLabel>
          <Input {...register('name')} onChange={handleFormChange} required />
        </FormControl>

        <Button disabled={loading} mt="2">
          作成
        </Button>
      </form>
    </Container>
  )
}

export default React.memo(CategoriesNew)
