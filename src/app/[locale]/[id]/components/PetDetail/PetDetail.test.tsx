import { render, screen } from "@testing-library/react"
import PetDetail from "./PetDetail"
import { useGetPet } from "@/infrastructure/hooks/useGetPet"
import { MockedDog } from "@/__mocks__/Pet"
import { TestProviders } from "@/tests-utils/TestProviders"

jest.mock("@/app/infrastructure/hooks/useGetPet")

const mockUseGetPet = useGetPet as jest.Mock

describe("PetDetail", () => {
  it("renders pet details when data is available", () => {
    mockUseGetPet.mockReturnValue({ data: MockedDog })

    render(
      <TestProviders>
        <PetDetail id="123" />
      </TestProviders>
    )

    expect(screen.getByText(/Name:/)).toBeInTheDocument()
    expect(screen.getByText(MockedDog.name)).toBeInTheDocument()
  })

  it("renders nothing when no data is available", () => {
    mockUseGetPet.mockReturnValue({ data: null })

    const { container } = render(
      <TestProviders>
        <PetDetail id="123" />
      </TestProviders>
    )
    expect(container.firstChild).toBeNull()
  })
})
