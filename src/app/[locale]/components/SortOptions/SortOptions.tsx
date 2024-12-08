import { useTranslations } from "next-intl"
import { StyledLabel, StyledSelect } from "./SortOptions.styles"

interface Props {
  sort: string
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortOptions: React.FC<Props> = ({ handleSortChange, sort }) => {
  const t = useTranslations()
  return (
    <div style={{ marginBottom: "20px" }}>
      <StyledLabel htmlFor="sort">{t("SortOptions.sort-by")}: </StyledLabel>
      <StyledSelect
        data-testid="sort-select"
        id="sort"
        value={sort}
        onChange={handleSortChange}
      >
        <option value="name">{t("SortOptions.name")}</option>
        <option value="weight">{t("SortOptions.weight")}</option>
        <option value="height">{t("SortOptions.height")}</option>
        <option value="kind">{t("SortOptions.kind")}</option>
      </StyledSelect>
    </div>
  )
}

export default SortOptions
