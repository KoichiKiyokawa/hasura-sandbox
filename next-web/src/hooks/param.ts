import { useRouter } from "next/router"

/**
 *
 * @example
 * const id = useParams('id') // http://example.com/foo/123 のとき，id = 123
 */
export function useParams(param: string): string | undefined {
  const router = useRouter()
  const paramMaybeArray = router.query[param]
  if (Array.isArray(paramMaybeArray)) return paramMaybeArray[0]

  return paramMaybeArray
}
