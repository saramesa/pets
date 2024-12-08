import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SortOptions from "./SortOptions"
import { TestProviders } from "@/tests-utils/TestProviders"

describe("SortOptions", () => {
  it("renders the sort options and calls handleSortChange when a new option is selected", async () => {
    const mockHandleSortChange = jest.fn((event) => event.target.value)

    render(
      <TestProviders>
        <SortOptions sort="name" handleSortChange={mockHandleSortChange} />
      </TestProviders>
    )

    const selectElement = screen.getByTestId("sort-select")
    expect(selectElement).toHaveValue("name")

    userEvent.selectOptions(
      selectElement,
      screen.getByRole("option", { name: "Weight (Ascending)" })
    )
    await waitFor(() => expect(mockHandleSortChange).toHaveBeenCalled())
  })
})
