import { Container, StyledButton } from "./Pagination.styles"
import { useTranslations } from "next-intl"

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
  hasMoreData,
}) => {
  const t = useTranslations()
  return (
    <Container>
      <StyledButton
        onClick={() => handlePaginationChange(page - 1)}
        disabled={page === 1}
      >
        {t("Pagination.previous-page")}
      </StyledButton>
      <StyledButton
        onClick={() => {
          if (!isPlaceholderData) {
            handlePaginationChange(page + 1)
          }
        }}
        disabled={!hasMoreData}
      >
        {t("Pagination.next-page")}
      </StyledButton>
    </Container>
  )
}

export default Pagination
