import { render, screen, fireEvent } from "@testing-library/react"
import Pagination from "./Pagination"

describe("Pagination", () => {
  const mockHandlePaginationChange = jest.fn()

  it("disables Previous Page button on the first page", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={1}
        hasMoreData={true}
      />
    )

    const previousButton = screen.getByText("Previous Page")
    expect(previousButton).toBeDisabled()
  })

  it("enables Previous Page button on pages greater than 1", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={2}
        hasMoreData={true}
      />
    )

    const previousButton = screen.getByText("Previous Page")
    expect(previousButton).toBeEnabled()
  })

  it("disables Next Page button when there is no more data", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={1}
        hasMoreData={false}
      />
    )

    const nextButton = screen.getByText("Next Page")
    expect(nextButton).toBeDisabled()
  })

  it("enables Next Page button when there is more data", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={1}
        hasMoreData={true}
      />
    )

    const nextButton = screen.getByText("Next Page")
    expect(nextButton).toBeEnabled()
  })

  it("does not call handlePaginationChange when Next Page is clicked and isPlaceholderData is true", () => {
    render(
      <Pagination
        isPlaceholderData={true}
        handlePaginationChange={mockHandlePaginationChange}
        page={1}
        hasMoreData={true}
      />
    )

    const nextButton = screen.getByText("Next Page")
    fireEvent.click(nextButton)

    expect(mockHandlePaginationChange).not.toHaveBeenCalled()
  })

  it("calls handlePaginationChange when Next Page is clicked and isPlaceholderData is false", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={1}
        hasMoreData={true}
      />
    )

    const nextButton = screen.getByText("Next Page")
    fireEvent.click(nextButton)

    expect(mockHandlePaginationChange).toHaveBeenCalledWith(2)
  })

  it("calls handlePaginationChange with correct page when Previous Page is clicked", () => {
    render(
      <Pagination
        isPlaceholderData={false}
        handlePaginationChange={mockHandlePaginationChange}
        page={2}
        hasMoreData={true}
      />
    )

    const previousButton = screen.getByText("Previous Page")
    fireEvent.click(previousButton)

    expect(mockHandlePaginationChange).toHaveBeenCalledWith(1)
  })
})