import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPets, Params } from "../services/getPets"
import { createPet } from "@/services/pets/PetFactory"

export const useGetPets = (params: Params) => {
  return useQuery({
    queryKey: ["pets", params.page, params.sort],
    queryFn: async () => {
      const petsData = await getPets(params)
      return petsData.map((petData) => createPet(petData))
    },
    placeholderData: keepPreviousData,
  })
}
