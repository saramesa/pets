import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPet, Params } from "../services/getPet"
import { createPet } from "@/services/pets/PetFactory"

export const useGetPet = (params: Params) => {
  return useQuery({
    queryKey: ["pet", params.id],
    queryFn: async () => {
      const petData = await getPet({ id: params.id })
      return createPet(petData)
    },
    placeholderData: keepPreviousData,
  })
}
