import { StyledLabel, StyledSelect } from "./SortOptions.styles";

interface Props {
  sort: string;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortOptions: React.FC<Props> = ({ handleSortChange, sort }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <StyledLabel htmlFor="sort">Sort by: </StyledLabel>
      <StyledSelect id="sort" value={sort} onChange={handleSortChange}>
        <option value="name">Name (Ascending)</option>
        <option value="weight">Weight (Ascending)</option>
        <option value="height">Height (Ascending)</option>
        <option value="kind">Kind (Ascending)</option>
      </StyledSelect>
    </div>
  )
}

export default SortOptions
