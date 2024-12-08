import { useQuery } from "@tanstack/react-query"
import { useGetPet } from "./useGetPet"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MockedDog } from "@/app/__mocks__/Pet"
import { MockedDogPetData } from "@/app/__mocks__/PetData"
import { renderHook, waitFor } from "@testing-library/react"


jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}))

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe("useGetPet", () => {
  it("fetches and returns pet data", async () => {
    const mockUseQuery = useQuery as jest.Mock
    mockUseQuery.mockReturnValue({
      data: MockedDog, 
      isSuccess: true,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(
      () => useGetPet({ id: MockedDogPetData.id.toString() }),
      { wrapper }
    )
    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(MockedDog)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isSuccess).toBe(true)
    expect(result.current.isError).toBe(false)
  })

  it("handles loading state", async () => {
    const mockUseQuery = useQuery as jest.Mock
    mockUseQuery.mockReturnValue({
      data: null,
      isSuccess: false,
      isLoading: true,
      isError: false,
    })

    const { result } = renderHook(
      () => useGetPet({ id: MockedDogPetData.id.toString() }),
      { wrapper }
    )

    expect(result.current.isLoading).toBe(true)
    expect(result.current.isSuccess).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  it("handles error state", async () => {
    const mockUseQuery = useQuery as jest.Mock
    mockUseQuery.mockReturnValue({
      data: null,
      isSuccess: false,
      isLoading: false,
      isError: true,
    })

    const { result } = renderHook(
      () => useGetPet({ id: MockedDogPetData.id.toString() }),
      { wrapper }
    )

    expect(result.current.isLoading).toBe(false)
    expect(result.current.isSuccess).toBe(false)
    expect(result.current.isError).toBe(true)
  })
})
