"use client"

import {
  PetCard,
  PetCardContent,
  PetContainer,
  PetDescription,
} from "./PetsGrid.styles"
import { useGetPets } from "@/infrastructure/hooks/useGetPets"
import { Pet } from "@/types"
import { useGetUrlParams } from "@/utils/useGetUrlParams"
import Image from "@/ui/Image"
import TableOptions from "../TableOptions"
import { useCallback } from "react"
import { useRouter } from "../../../../i18n/routing"
import PetOfTheDay from "../PetOfTheDay"
import { useTranslations } from "next-intl"

const PetsGrid: React.FC = () => {
  const t = useTranslations()
  const router = useRouter()
  const { sort, page } = useGetUrlParams()
  const { data, isPlaceholderData } = useGetPets({ sort, page })
  const handleOnClick = useCallback(
    (id: number) => {
      router.push({
        pathname: `/${id}`,
        query: { sort, page: page.toString() },
      })
    },
    [router, page, sort]
  )
  if (!data) return null
  const hasMoreData = data?.length > 0

  return (
    <>
      <PetOfTheDay pets={data} />
      <TableOptions
        isPlaceholderData={isPlaceholderData}
        hasMoreData={hasMoreData}
      />
      <PetContainer>
        {data.map((pet: Pet) => (
          <PetCard key={pet.id} onClick={() => handleOnClick(pet.id)}>
            <PetCardContent>
              <Image src={pet.url} alt={`pet image ${pet.name}`} />
              <PetDescription>
                <p>
                  <b>{t("PetsGrid.name")}: </b>
                  {pet.name}
                </p>
                <p>
                  <b>{t("PetsGrid.kind")}: </b>
                  {t(`PetsGrid.${pet.kind}`) || t("PetsGrid.unknown")}
                </p>
                <p>
                  <b>{t("PetsGrid.weight")}: </b>
                  {pet.weight}gr
                </p>
                <p>
                  <b>{t("PetsGrid.height")}: </b>
                  {pet.height}
                </p>
                <p>
                  <b>{t("PetsGrid.length")}: </b>
                  {pet.length}cm
                </p>
              </PetDescription>
            </PetCardContent>
          </PetCard>
        ))}
      </PetContainer>
    </>
  )
}

export default PetsGrid
