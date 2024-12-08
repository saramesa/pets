import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { MockedPets } from "@/__mocks__/Pet"
import { renderHook, waitFor } from "@testing-library/react"
import { useGetPets } from "./useGetPets"

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}))

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const params = { sort: "name", page: 1 }

describe("useGetPets", () => {
  it("fetches and returns pets data", async () => {
    const mockUseQuery = useQuery as jest.Mock
    mockUseQuery.mockReturnValue({
      data: MockedPets,
      isSuccess: true,
      isLoading: false,
      isError: false,
    })

    const { result } = renderHook(
      () => useGetPets(params),
      { wrapper }
    )
    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toEqual(MockedPets)
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
      () => useGetPets(params),
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
      () => useGetPets(params),
      { wrapper }
    )

    expect(result.current.isLoading).toBe(false)
    expect(result.current.isSuccess).toBe(false)
    expect(result.current.isError).toBe(true)
  })
})
