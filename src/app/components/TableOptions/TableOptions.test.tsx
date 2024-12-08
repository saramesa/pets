import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useRouter } from "next/navigation"
import { useGetUrlParams } from "@/app/utils/useGetUrlParams"
import TableOptions from "./TableOptions"


jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

jest.mock("@/app/utils/useGetUrlParams", () => ({
  useGetUrlParams: jest.fn(),
}))

describe("TableOptions", () => {
  let mockPush: jest.Mock

  beforeEach(() => {
    mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })

    ;(useGetUrlParams as jest.Mock).mockReturnValue({
      sort: "name",
      page: 1,
    })
  })


  it("renders SortOptions and Pagination components", () => {
    render(<TableOptions isPlaceholderData={false} hasMoreData={true} />)
    
    expect(screen.getByLabelText(/Sort by:/i)).toBeInTheDocument()

    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument()
  })

  it("updates URL when sort option is changed", async () => {
    render(<TableOptions isPlaceholderData={false} hasMoreData={true} />)

    const selectElement = screen.getByRole("combobox", {
      name: /Sort by:/i,
    }) as HTMLSelectElement

    expect(selectElement).toHaveValue("name")

    await userEvent.selectOptions(
      selectElement,
      screen.getByRole("option", { name: "Weight (Ascending)" })
    )

    expect(mockPush).toHaveBeenCalledWith("/?_page=1&_sort=weight")

  })

  it("updates URL when pagination is changed", async () => {
    render(<TableOptions isPlaceholderData={false} hasMoreData={true} />)

    const nextButton = screen.getByRole("button", { name: /next/i })

    await userEvent.click(nextButton)

    expect(mockPush).toHaveBeenCalledWith("/?_page=2&_sort=name")
  })
})
