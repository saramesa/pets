import { useRouter } from "../../../../i18n/routing"
import Pagination from "../Pagination"
import SortOptions from "../SortOptions"
import { Container } from "./TableOptions.styles"
import { useGetUrlParams } from "@/utils/useGetUrlParams"

interface Props {
  isPlaceholderData: boolean
  hasMoreData: boolean
}

const TableOptions: React.FC<Props> = ({ isPlaceholderData, hasMoreData }) => {
  const router = useRouter()
  const { sort, page } = useGetUrlParams()
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value
    router.push({ pathname: "/", query: { page: "1", sort: newSort } })
  }
  const handlePaginationChange = (newPage: number) => {
    router.push({ pathname: "/", query: { page: newPage.toString(), sort: sort } })
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
