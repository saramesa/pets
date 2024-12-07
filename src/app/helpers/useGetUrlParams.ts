import { useSearchParams } from "next/navigation"

export const useGetUrlParams = (): { page: number; sort: string } => {
  const searchParams = useSearchParams()
  const sort = searchParams?.get("_sort") ?? "name"
  const page = Number(searchParams?.get("_page")) || 1
  return { page, sort }
}
