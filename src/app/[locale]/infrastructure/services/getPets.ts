import { PetData } from "../../types"

export interface Params {
  sort: string
  page: number
}

export const getPets = async (params?: Params) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/?_page=${params?.page}&_per_page=10&_sort=${params?.sort}`
  )
  if (!response.ok) {
    throw new Error("Failed to fetch pets")
  }
  const pets: PetData[] = await response.json()
  return pets
}
