import { getPets } from "./getPets"
import { MockedCatPetData } from "../../__mocks__/PetData"

const params = { sort: "name", page: 1 }

describe("getPets", () => {
  it("fetches and returns pets data when response is ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(MockedCatPetData),
    } as unknown as Response)

    const petData = await getPets(params)

    expect(fetch).toHaveBeenCalledWith(
      `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/?_page=${params?.page}&_per_page=10&_sort=${params?.sort}`
    )
    expect(petData).toEqual(MockedCatPetData)
  })

  it("throws an error when response is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(null),
    } as unknown as Response)

    await expect(getPets(params)).rejects.toThrow(
      new Error("Failed to fetch pets")
    )
  })
})
