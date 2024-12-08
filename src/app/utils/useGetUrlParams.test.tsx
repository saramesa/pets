import { renderHook } from "@testing-library/react"
import { useGetUrlParams } from "./useGetUrlParams"
import { useSearchParams } from "next/navigation"

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}))

describe("useGetUrlParams", () => {
  beforeEach(() => {
    ;(useSearchParams as jest.Mock).mockReset()
  })
  it("should return default values when no search params are present", () => {
    ;(useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValueOnce(null).mockReturnValueOnce(null),
    })

    const { result } = renderHook(() => useGetUrlParams())

    expect(result.current.page).toBe(1)
    expect(result.current.sort).toBe("name")
  })
  it("should return the correct values from search params", () => {

    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn()
        .mockReturnValueOnce("3")  
        .mockReturnValueOnce("weight"),
    });

    const { result } = renderHook(() => useGetUrlParams());

    expect(result.current.page).toBe(3); 
    expect(result.current.sort).toBe("weight"); 
  });

})
