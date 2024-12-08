import { Pet } from "@/app/types"
import CustomImage from "@/app/ui/Image"
import { useGetPetOfTheDay } from "@/app/utils/useGetPetOfTheDay"
import { Container, StyledButton } from "./PetOfTheyDay.styles"

interface Props {
  pets: Pet[]
}

const PetOfTheDay: React.FC<Props> = ({ pets }) => {
  const { petOfTheDay, handleClickPetOfTheDay, isLoading } =
    useGetPetOfTheDay(pets)

  return (
    <div>
      <StyledButton
        onClick={handleClickPetOfTheDay}
        disabled={isLoading || !!petOfTheDay}
      >
        Pet of the Day
      </StyledButton>
      <Container style={{ minHeight: "140px" }}>
        {petOfTheDay && (
          <>
            <h3>{petOfTheDay.name}</h3>
            <CustomImage src={petOfTheDay.url} alt={petOfTheDay.name} />
          </>
        )}
      </Container>
    </div>
  )
}

export default PetOfTheDay
