import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useRouter } from "../../../../i18n/routing"
import { useGetUrlParams } from "@/utils/useGetUrlParams"
import TableOptions from "./TableOptions"
import { TestProviders } from "@/tests-utils/TestProviders"

jest.mock("../../../../i18n/routing.ts", () => ({
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
    render(
      <TestProviders>
        <TableOptions isPlaceholderData={false} hasMoreData={true} />
      </TestProviders>
    )

    expect(screen.getByLabelText(/Sort by:/i)).toBeInTheDocument()

    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument()
  })

  it("updates URL when sort option is changed", async () => {
    render(
      <TestProviders>
        <TableOptions isPlaceholderData={false} hasMoreData={true} />
      </TestProviders>
    )

    const selectElement = screen.getByRole("combobox", {
      name: /Sort by:/i,
    })

    expect(selectElement).toHaveValue("name")

    await userEvent.selectOptions(
      selectElement,
      screen.getByRole("option", { name: "Weight (Ascending)" })
    )

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/",
      query: { page: "1", sort: "weight" },
    })
  })

  it("updates URL when pagination is changed", async () => {
    render(
      <TestProviders>
        <TableOptions isPlaceholderData={false} hasMoreData={true} />
      </TestProviders>
    )

    const nextButton = screen.getByRole("button", { name: /next/i })

    await userEvent.click(nextButton)

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/",
      query: { page: "2", sort: "name" },
    })
  })
})
