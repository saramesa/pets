import { render, screen } from "@testing-library/react"
import PetLives from "./PetLives"

describe("PetLives", () => {
  it("renders the correct number of hearts based on lives", () => {
    // Test for 5 lives
    render(<PetLives lives={5} />)
    const hearts = screen.getByText("❤️❤️❤️❤️❤️") 
    expect(hearts).toBeInTheDocument()

    // Test for 9 lives
    render(<PetLives lives={9} />)
    const hearts9 = screen.getByText("❤️❤️❤️❤️❤️❤️❤️❤️❤️") 
    expect(hearts9).toBeInTheDocument()

    // Test for 3 lives
    render(<PetLives lives={3} />)
    const hearts3 = screen.getByText("❤️❤️❤️") 
    expect(hearts3).toBeInTheDocument()
  })

  it("renders additional lives text if lives exceed 9", () => {
    render(<PetLives lives={12} />)
    const hearts = screen.getByText("❤️❤️❤️❤️❤️❤️❤️❤️❤️") 
    const moreLivesText = screen.getByText("+3 more") 

    expect(hearts).toBeInTheDocument()
    expect(moreLivesText).toBeInTheDocument()
  })

  it("does not show additional lives text if lives are 9 or less", () => {
    render(<PetLives lives={9} />)
    const moreLivesText = screen.queryByText(/^\+.*more$/) 
    expect(moreLivesText).toBeNull()
  })
})
