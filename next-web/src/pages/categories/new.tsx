import { Button } from '@chakra-ui/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Container, Text } from '@chakra-ui/layout'
import { zodResolver } from '@hookform/resolvers/zod'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useForm, FormState, UseFormRegister, Path } from 'react-hook-form'
import { ERROR_MESSAGES } from 'src/constants/error'
import { useCreateCategoryMutation } from 'src/generated/gql'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string()
    .nonempty('入力必須です')
    .max(8, { message: 'カテゴリ名は8文字以下にしてください' }),
})

type Form = {
  name: string
}

const CategoriesNew = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })
  console.log(errors)

  const [createCategory, { loading, error }] = useCreateCategoryMutation()

  useEffect(() => {
    if (error) alert(ERROR_MESSAGES.DEFAULT_NETWORK_ERROR)
  }, [error])

  const onSubmit = (form: Form) => {
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
      <Head>
        <title>カテゴリ新規作成</title>
      </Head>
      <Text as="h1" fontWeight="extrabold" fontSize="lg">
        categories new
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="category-name" isInvalid={Boolean(errors.name)}>
          <FormLabel>カテゴリ名</FormLabel>
          <Input {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" disabled={loading} mt="2">
          作成
        </Button>
      </form>
    </Container>
  )
}

export default React.memo(CategoriesNew)
