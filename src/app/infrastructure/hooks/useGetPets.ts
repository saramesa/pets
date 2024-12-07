import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPets, Params } from "../services/getPets"

export const useGetPets = (params: Params) => {
  return useQuery({
    queryKey: ["pets", params.page, params.sort],
    queryFn: () => getPets(params),
    placeholderData: keepPreviousData,
  })
}
