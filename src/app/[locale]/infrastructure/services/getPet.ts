import { PetData } from "../../types"

export interface Params {
  id: string
}

export const getPet = async (params?: Params) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/${params?.id}`
  )
  if (!response.ok) {
    throw new Error("Failed to fetch pet")
  }
  const pet: PetData = await response.json()
  return pet
}
