import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MockedDog } from "@/__mocks__/Pet"
import PetDetailPage from "./page"
import { useGetPet } from "@/infrastructure/hooks/useGetPet"
import { TestProviders } from "@/tests-utils/TestProviders"

jest.mock("@/app/infrastructure/hooks/useGetPet")

const mockUseGetPet = useGetPet as jest.Mock

describe("PetDetailPage", () => {
  it("renders PetDetail component with correct id from params", () => {
    const queryClient = new QueryClient()
    mockUseGetPet.mockReturnValue({ data: MockedDog })
    const params = { id: "123" }

    render(
      <QueryClientProvider client={queryClient}>
        <TestProviders>
          <PetDetailPage params={params} />
        </TestProviders>
      </QueryClientProvider>
    )

    expect(screen.getByText(MockedDog.name)).toBeInTheDocument()
  })
})
