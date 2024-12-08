import { render, screen } from "@testing-library/react"
import PetDetail from "./PetDetail"
import { useGetPet } from "@/infrastructure/hooks/useGetPet"
import { MockedDog } from '@/__mocks__/Pet';


jest.mock("@/infrastructure/hooks/useGetPet")

const mockUseGetPet = useGetPet as jest.Mock

describe("PetDetail", () => {
  it("renders pet details when data is available", () => {
    mockUseGetPet.mockReturnValue({ data: MockedDog })

    render(<PetDetail id="123" />)

    expect(screen.getByText(/Name:/)).toBeInTheDocument()
    expect(screen.getByText(MockedDog.name)).toBeInTheDocument()
  })

  it("renders nothing when no data is available", () => {
    mockUseGetPet.mockReturnValue({ data: null })

    const { container } = render(<PetDetail id="123" />)
    expect(container.firstChild).toBeNull()
  })
})
