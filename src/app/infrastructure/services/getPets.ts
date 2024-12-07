import { Pet } from "../../types"

export interface Params {
  sort: string
  page: number
}

export const getPets = async (params?: Params) => {
  const response = await fetch(
    `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/?_page=${params?.page}&_per_page=10&_sort=${params?.sort}`
  )

  const pets: Pet[] = await response.json()
  return pets
}
