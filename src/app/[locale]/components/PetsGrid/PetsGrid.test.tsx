import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PetsGrid from "./PetsGrid"
import { useGetPets } from "@/infrastructure/hooks/useGetPets"
import { useRouter, useSearchParams } from "next/navigation"
import { MockedPets } from "@/__mocks__/Pet"
import { TestProviders } from "@/tests-utils/TestProviders"

jest.mock("@/app/infrastructure/hooks/useGetPets")
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

const mockUseRouter = useRouter as jest.Mock
const mockUseSearchParams = useSearchParams as jest.Mock
const mockUseGetPets = useGetPets as jest.Mock

describe("PetsGrid", () => {
  beforeEach(() => {
    mockUseGetPets.mockReturnValue({
      data: MockedPets,
      isPlaceholderData: false,
    })
    mockUseRouter.mockReturnValue({
      push: jest.fn(),
    })
    mockUseSearchParams.mockReturnValue(
      new URLSearchParams({
        page: "1",
        sort: "name",
      })
    )
  })

  it("renders pet cards correctly", async () => {
    render(
      <TestProviders>
        <PetsGrid />
      </TestProviders>
    )

    expect(screen.getByText(MockedPets[0].name)).toBeInTheDocument()
    const petImage = screen.getByRole("img", {
      name: `pet image ${MockedPets[0].name}`,
    })
    expect(petImage).toHaveAttribute("alt", `pet image ${MockedPets[0].name}`)
  })

  it("handles click on pet card and navigates correctly", async () => {
    const mockPush = jest.fn()
    mockUseRouter.mockReturnValueOnce({ push: mockPush })

    render(
      <TestProviders>
        <PetsGrid />
      </TestProviders>
    )

    const petCard = screen.getByText(MockedPets[0].name).closest("div")
    userEvent.click(petCard!)

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(`/27?_page=1&_sort=name`)
    })
  })

  it("renders nothing when no data is available", () => {
    mockUseGetPets.mockReturnValue({
      data: null,
      isPlaceholderData: false,
    })

    render(
      <TestProviders>
        <PetsGrid />
      </TestProviders>
    )

    expect(screen.queryByText("Name:")).toBeNull()
  })
})
