"use client"

import { useGetPet } from "@/app/infrastructure/hooks/useGetPet"
import CustomImage from "@/app/ui/Image"
import { Container, DetailContainer } from "./PetDetail.styles"
import { createPet } from "@/app/services/pets/PetFactory"
import PetLives from "../PetLives/PetLives"

interface Props {
  id: string
}

const PetDetail: React.FC<Props> = ({ id }) => {
  const { data } = useGetPet({ id })
  if (!data) return null
  const pet = createPet(data)

  return (
    <Container>
      <DetailContainer>
        <CustomImage
          src={data?.photo_url}
          alt="pet image"
          width={200}
          height={200}
        />
        <div>
          <p>
            <b>Name: </b>
            {pet.name}
          </p>
          <p>
            <b>Weight: </b>
            {pet.weight}gr
          </p>
          <p>
            <b>Height: </b>
            {pet.height}cm
          </p>
          <p>
            <b>Length: </b>
            {pet.length}cm
          </p>
          <p>
            <b>Kind: </b>
            {pet.kind}
          </p>
          {pet.lives && (
            <p>
              <b>Lives:</b> <PetLives lives={pet.lives} />
            </p>
          )}
        </div>
        <div>
          <b>Health: {pet.calculateHealth()}</b>
        </div>
      </DetailContainer>
      <div>
        <p>
          <b>Description: </b>
          {data.description}
        </p>
      </div>
    </Container>
  )
}

export default PetDetail
