"use client"

import { useTranslations } from "next-intl"
import { useGetPet } from "@/infrastructure/hooks/useGetPet"
import CustomImage from "@/ui/Image"
import { Container, DetailContainer } from "./PetDetail.styles"
import PetLives from "../PetLives/PetLives"

interface Props {
  id: string
}

const PetDetail: React.FC<Props> = ({ id }) => {
  const t = useTranslations()
  const { data } = useGetPet({ id })
  if (!data) return null

  return (
    <Container>
      <DetailContainer>
        <CustomImage src={data?.url} alt="pet image" width={200} height={200} />
        <div>
          <p>
            <b>{t("PetDetail.name")}: </b>
            {data.name}
          </p>
          <p>
            <b>{t("PetDetail.weight")}: </b>
            {data.weight}gr
          </p>
          <p>
            <b>{t("PetDetail.height")}: </b>
            {data.height}cm
          </p>
          <p>
            <b>{t("PetDetail.length")}: </b>
            {data.length}cm
          </p>
          <p>
            <b>{t("PetDetail.kind")}: </b>
            {t(`PetsGrid.${data.kind}`)}
          </p>
          {data.lives && (
            <p>
              <b>{t("PetDetail.lives")}: </b> <PetLives lives={data.lives} />
            </p>
          )}
        </div>
        <div>
          <b>
            {t("PetDetail.health")}: {data.calculateHealth()}
          </b>
        </div>
      </DetailContainer>
      <div>
        <p>
          <b>{t("PetDetail.description")}: </b>
          {data.description}
        </p>
      </div>
    </Container>
  )
}

export default PetDetail
