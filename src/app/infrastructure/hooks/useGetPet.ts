import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPet, Params } from "../services/getPet"

export const useGetPet = (params: Params) => {
  return useQuery({
    queryKey: ["pet", params.id],
    queryFn: () => getPet(params),
    placeholderData: keepPreviousData,
  })
}
