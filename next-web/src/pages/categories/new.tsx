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
import React from 'react'
import { useForm } from 'react-hook-form'
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
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Form>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const [createCategory, { loading }] = useCreateCategoryMutation()

  const onSubmit = (form: Form) => {
    createCategory({ variables: { object: form } })
      .then(() => {
        router.push('/categories')
      })
      .catch((err) => {
        if (err.message.includes('duplicate'))
          setError('name', { message: 'すでに登録されているカテゴリ名です' })
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

        <Button type="submit" disabled={isSubmitting || loading} mt="2">
          作成
        </Button>
      </form>
    </Container>
  )
}

export default React.memo(CategoriesNew)
