import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Box, Container, HStack, Stack, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { Loading } from 'src/components/navigators/Loading'
import {
  useGetCategoriesWithProductQuery,
  useUpdateCategoryMutation,
} from 'src/generated/gql'

const CategoriesIndex = () => {
  const { data, loading, error } = useGetCategoriesWithProductQuery()

  const categoryWithProducts = useMemo(
    () =>
      data?.categories.flatMap((category) => ({
        ...category,
        products: category.product_categories.map((pc) => pc.product),
      })) ?? [],
    [data]
  )

  const [updateCategory, { loading: submitting }] = useUpdateCategoryMutation()

  const [isEditList, setIsEditList] = useState<boolean[]>([])
  useEffect(() => {
    setIsEditList(categoryWithProducts.map(() => false))
  }, [categoryWithProducts])

  const toggleEditMode = (index: number) => {
    setIsEditList(
      isEditList.map((isEdit, i) => (i === index ? !isEdit : isEdit))
    )
  }

  const handleEdit = (
    e: React.FormEvent<HTMLFormElement>,
    index: number,
    id: string
  ) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const submittingData = Object.fromEntries(formData.entries()) as {
      name: string
    }
    updateCategory({ variables: { id, object: submittingData } }).then(() => {
      toggleEditMode(index)
    })
  }

  return (
    <Container>
      <Link href="/">トップに戻る</Link>
      <HStack>
        <Text fontSize="2xl" fontWeight="bold">
          category index
        </Text>

        <Link href="/categories/new" passHref>
          <Button as="a">新規作成</Button>
        </Link>
      </HStack>

      {loading && <Loading />}
      {error && <span>エラーが発生しました．</span>}

      <Stack mt="4">
        {categoryWithProducts.map((categoryWithProduct, i) => (
          <Box
            border="1px"
            borderColor="ActiveCaption"
            p="3"
            rounded="lg"
            key={i}
          >
            <h2>
              {isEditList[i] ? (
                <HStack>
                  <form
                    onSubmit={(e) => handleEdit(e, i, categoryWithProduct.id)}
                  >
                    <HStack>
                      <Input
                        name="name"
                        defaultValue={categoryWithProduct.name}
                      />
                      <Button colorScheme="blue" disabled={submitting}>
                        確定
                      </Button>
                    </HStack>
                  </form>
                  <Button ml="4" onClick={() => toggleEditMode(i)}>
                    キャンセル
                  </Button>
                </HStack>
              ) : (
                <>
                  <Link href={`/categories/${categoryWithProduct.id}`} passHref>
                    <Text as="a" fontSize="lg" fontWeight="bold">
                      {categoryWithProduct.name}
                    </Text>
                  </Link>

                  <Button
                    colorScheme="orange"
                    ml="3"
                    onClick={() => toggleEditMode(i)}
                  >
                    edit
                  </Button>
                </>
              )}
            </h2>
            {categoryWithProduct.products.length === 0 && (
              <span>該当する商品はありません</span>
            )}
            {categoryWithProduct.products.map((product, productIndex) => (
              <Fragment key={`product-${productIndex}`}>
                <li>{product.name}</li>
                <li>&yen;{product.price}</li>
              </Fragment>
            ))}
          </Box>
        ))}
      </Stack>
    </Container>
  )
}

export default CategoriesIndex
