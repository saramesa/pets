"use client"

import {
  PetCard,
  PetCardContent,
  PetContainer,
  PetDescription,
} from "./PetsGrid.styles"
import { useGetPets } from "@/app/infrastructure/hooks/useGetPets"
import { Pet } from "@/app/types"
import { useGetUrlParams } from "@/app/helpers/useGetUrlParams"
import Image from "../../ui/Image"
import TableOptions from "../TableOptions"

const PetsGrid: React.FC = () => {
  const { sort, page } = useGetUrlParams()
  const { data, isPlaceholderData } = useGetPets({ sort, page })
  if (!data) return null
  const hasMoreData = data?.length > 0
  return (
    <>
      <TableOptions
        isPlaceholderData={isPlaceholderData}
        hasMoreData={hasMoreData}
      />
      <PetContainer>
        {data.map((pet: Pet) => (
          <PetCard key={pet.id}>
            <PetCardContent>
              <Image src={pet.photo_url} alt="pet image" />
              <PetDescription>
                <p>
                  <b>Name: </b>
                  {pet.name}
                </p>
                <p>
                  <b>Kind: </b> {pet.kind}
                </p>
                <p>
                  <b>Weight: </b>
                  {pet.weight}
                </p>
                <p>
                  <b>Heigth: </b>
                  {pet.height}
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