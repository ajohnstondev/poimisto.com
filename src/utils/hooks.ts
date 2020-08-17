import { useState, useEffect } from 'react'

/*
 * Allows to use query params with ssr
 * use carefully can return undefined
 */
export function useSearchParams() {
  const [searchParams, setSearchParams] = useState<InstanceType<
    typeof URLSearchParams
  > | null>()

  useEffect(() => {
    setSearchParams(new URLSearchParams(document.location.search))
  }, [setSearchParams])

  return searchParams
}
