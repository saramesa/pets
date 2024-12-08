import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PetOfTheDay from "./PetOfTheDay"
import { useGetPetOfTheDay } from "@/app/utils/useGetPetOfTheDay"
import { MockedPets } from "@/app/__mocks__/Pet"

jest.mock("@/app/utils/useGetPetOfTheDay")

describe("PetOfTheDay", () => {
  const mockUseGetPetOfTheDay = useGetPetOfTheDay as jest.Mock

  it("disables the button when isLoading is true", () => {
    mockUseGetPetOfTheDay.mockReturnValue({
      petOfTheDay: null,
      handleClickPetOfTheDay: jest.fn(),
      isLoading: true,
    })

    render(<PetOfTheDay pets={MockedPets} />)

    const button = screen.getByText("Pet of the Day")
    expect(button).toBeDisabled() 
  })

  it("disables the button when petOfTheDay is already set", () => {
    mockUseGetPetOfTheDay.mockReturnValue({
      petOfTheDay: MockedPets[0],
      handleClickPetOfTheDay: jest.fn(),
      isLoading: false,
    })

    render(<PetOfTheDay pets={MockedPets} />)

    const button = screen.getByText("Pet of the Day")
    expect(button).toBeDisabled() 
  })

  it("enables the button when no pet is selected and isLoading is false", () => {
    mockUseGetPetOfTheDay.mockReturnValue({
      petOfTheDay: null,
      handleClickPetOfTheDay: jest.fn(),
      isLoading: false,
    })

    render(<PetOfTheDay pets={MockedPets} />)

    const button = screen.getByText("Pet of the Day")
    expect(button).toBeEnabled() 
  })

  it("displays the pet of the day name and image when selected", async () => {
    mockUseGetPetOfTheDay.mockReturnValue({
      petOfTheDay: MockedPets[0],
      handleClickPetOfTheDay: jest.fn(),
      isLoading: false,
    })

    render(<PetOfTheDay pets={MockedPets} />)

    const petName = await screen.findByText(MockedPets[0].name)
    const petImage = screen.getByRole("img", { name: MockedPets[0].name })

    expect(petName).toBeInTheDocument() 
    expect(petImage).toHaveAttribute("alt", MockedPets[0].name)
  })

  it("calls handleClickPetOfTheDay when the button is clicked", async () => {
    const handleClickPetOfTheDay = jest.fn()

    mockUseGetPetOfTheDay.mockReturnValue({
      petOfTheDay: null,
      handleClickPetOfTheDay,
      isLoading: false,
    })

    render(<PetOfTheDay pets={MockedPets} />)

    const button = screen.getByText("Pet of the Day")
    userEvent.click(button)

    await waitFor(() => {
      expect(handleClickPetOfTheDay).toHaveBeenCalled() 
    })
  })
})
