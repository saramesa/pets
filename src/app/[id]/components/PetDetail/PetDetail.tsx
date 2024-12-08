"use client"

import { useGetPet } from "@/app/infrastructure/hooks/useGetPet"
import CustomImage from "@/app/ui/Image"
import { Container, DetailContainer } from "./PetDetail.styles"
import PetLives from "../PetLives/PetLives"

interface Props {
  id: string
}

const PetDetail: React.FC<Props> = ({ id }) => {
  const { data } = useGetPet({ id })
  if (!data) return null

  return (
    <Container>
      <DetailContainer>
        <CustomImage
          src={data?.url}
          alt="pet image"
          width={200}
          height={200}
        />
        <div>
          <p>
            <b>Name: </b>
            {data.name}
          </p>
          <p>
            <b>Weight: </b>
            {data.weight}gr
          </p>
          <p>
            <b>Height: </b>
            {data.height}cm
          </p>
          <p>
            <b>Length: </b>
            {data.length}cm
          </p>
          <p>
            <b>Kind: </b>
            {data.kind}
          </p>
          {data.lives && (
            <p>
              <b>Lives:</b> <PetLives lives={data.lives} />
            </p>
          )}
        </div>
        <div>
          <b>Health: {data.calculateHealth()}</b>
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
