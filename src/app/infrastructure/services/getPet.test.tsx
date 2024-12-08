import { getPet, Params } from "./getPet"
import { MockedCatPetData } from "../../__mocks__/PetData"

const params: Params = { id: "27" }

describe("getPet", () => {
  it("fetches and returns pet data when response is ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(MockedCatPetData),
    } as unknown as Response)

    const petData = await getPet(params)

    expect(fetch).toHaveBeenCalledWith(
      `https://my-json-server.typicode.com/Feverup/fever_pets_data/pets/${params.id}`
    )
    expect(petData).toEqual(MockedCatPetData)
  })

  it("throws an error when response is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue(null),
    } as unknown as Response)

    await expect(getPet(params)).rejects.toThrow(  new Error("Failed to fetch pet"))
  })
})
