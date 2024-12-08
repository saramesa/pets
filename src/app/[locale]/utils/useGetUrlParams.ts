import { useSearchParams } from "next/navigation"

export const useGetUrlParams = (): { page: number; sort: string } => {
  const searchParams = useSearchParams()
  const page = Number(searchParams?.get("page")) || 1
  const sort = searchParams?.get("sort") ?? "name"
  return { page, sort }
}
