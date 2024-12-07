import { Container, StyledButton } from "./Pagination.styles"

interface Props {
  isPlaceholderData: boolean
  handlePaginationChange: (page: number) => void
  page: number
  hasMoreData: boolean
}

const Pagination: React.FC<Props> = ({
  isPlaceholderData,
  handlePaginationChange,
  page,
  hasMoreData
}) => {
  return (
    <Container>
      <StyledButton
        onClick={() => handlePaginationChange(page - 1)}
        disabled={page === 1}
      >
        Previous Page
      </StyledButton>
      <StyledButton
        onClick={() => {
          if (!isPlaceholderData) {
            handlePaginationChange(page + 1)
          }
        }}
        disabled={!hasMoreData}
      >
        Next Page
      </StyledButton>
    </Container>
  )
}

export default Pagination
