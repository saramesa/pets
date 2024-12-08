import { Pet } from "@/types"
import CustomImage from "@/ui/Image"
import { useGetPetOfTheDay } from "@/utils/useGetPetOfTheDay"
import { Container, StyledButton } from "./PetOfTheyDay.styles"
import { useTranslations } from "next-intl"

interface Props {
  pets: Pet[]
}

const PetOfTheDay: React.FC<Props> = ({ pets }) => {
  const t = useTranslations()
  const { petOfTheDay, handleClickPetOfTheDay, isLoading } =
    useGetPetOfTheDay(pets)

  return (
    <div>
      <StyledButton
        onClick={handleClickPetOfTheDay}
        disabled={isLoading || !!petOfTheDay}
      >
        {t("PetOfTheDay.name")}
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
