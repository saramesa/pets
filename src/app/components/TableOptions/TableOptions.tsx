import { useRouter } from "next/navigation"
import Pagination from "../Pagination"
import SortOptions from "../SortOptions"
import { Container } from "./TableOptions.styles"
import { useGetUrlParams } from "@/app/helpers/useGetUrlParams"

interface Props {
  isPlaceholderData: boolean
  hasMoreData: boolean
}

const TableOptions: React.FC<Props> = ({ isPlaceholderData, hasMoreData }) => {
  const router = useRouter()
  const { sort, page } = useGetUrlParams()
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value
    const params = new URLSearchParams()
    params.set("_page", "1")
    params.set("_sort", newSort)
    router.push(`/?${params.toString()}`)
  }
  const handlePaginationChange = (newPage: number) => {
    const params = new URLSearchParams()
    params.set("_page", newPage.toString())
    params.set("_sort", sort)

    router.push(`/?${params.toString()}`)
  }
  return (
    <Container>
      <SortOptions handleSortChange={handleSortChange} sort={sort} />
      <Pagination
        page={page}
        handlePaginationChange={handlePaginationChange}
        isPlaceholderData={isPlaceholderData}
        hasMoreData={hasMoreData}
      />
    </Container>
  )
}

export default TableOptions
