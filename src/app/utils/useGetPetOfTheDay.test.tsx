import { renderHook, act, waitFor } from "@testing-library/react"
import { useGetPetOfTheDay } from "./useGetPetOfTheDay"
import { MockedPets } from "@/app/__mocks__/Pet"

const localStorageMock = (function () {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    clear: () => {
      store = {}
    },
    removeItem: (key: string) => {
      delete store[key]
    },
  }
})()

describe("useGetPetOfTheDay", () => {
  it("should set and retrieve pet of the day", async () => {
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    })

    const { result, rerender } = renderHook(() => useGetPetOfTheDay(MockedPets))

    const storedPet = {
      date: "2024-12-08",
      pet: MockedPets[1],
    }

    localStorage.setItem("petOfTheDay", JSON.stringify(storedPet))

    await act(async () => {
      rerender()
    })

    await waitFor(() => {
      expect(result.current.petOfTheDay).toEqual(MockedPets[1])
    })

    expect(result.current.isLoading).toBe(false)

    const storedData = JSON.parse(localStorage.getItem("petOfTheDay") || "{}")
    expect(storedData.pet.id).toEqual(MockedPets[1].id)
    expect(localStorage.getItem("petOfTheDay")).not.toBeNull()
  })
})
