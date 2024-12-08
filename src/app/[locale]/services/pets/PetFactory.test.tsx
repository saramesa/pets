import { PetFactory, createPet } from "./PetFactory" 
import { PetData, PetKind } from "@/types"
import { Dog } from "./Dog"
import { Cat } from "./Cat"
import { MockedDogPetData, MockedCatPetData } from "@/__mocks__/PetData"

describe("PetFactory and createPet function", () => {
  it("creates a Dog instance when kind is Dog", () => {
    const dog = PetFactory.create(MockedDogPetData)

    expect(dog).toBeInstanceOf(Dog)
    expect(dog.id).toBe(MockedDogPetData.id)
    expect(dog.name).toBe(MockedDogPetData.name)
    expect(dog.description).toBe(MockedDogPetData.description)
    expect(dog.url).toBe(MockedDogPetData.photo_url)
  })

  it("creates a Cat instance when kind is Cat", () => {
    const cat = PetFactory.create(MockedCatPetData)

    expect(cat).toBeInstanceOf(Cat)
    expect(cat.id).toBe(MockedCatPetData.id)
    expect(cat.name).toBe(MockedCatPetData.name)
    expect(cat.description).toBe(MockedCatPetData.description)
    expect(cat.url).toBe(MockedCatPetData.photo_url)
  })

  it("throws an error if an unknown pet kind is provided", () => {
    const invalidPetData: PetData = {
      id: 999,
      name: "Unknown",
      weight: 10,
      height: 30,
      length: 80,
      photo_url: "http://example.com/unknown.jpg",
      description: "An unknown pet",
      kind: "Rabbit" as PetKind,
    }

    expect(() => PetFactory.create(invalidPetData)).toThrow(
        new Error("Unknown pet kind: Rabbit")
    )
  })

  it("creates a pet via createPet function", () => {
    const dog = createPet(MockedDogPetData)

    expect(dog).toBeInstanceOf(Dog)
    expect(dog.id).toBe(MockedDogPetData.id)
    expect(dog.name).toBe(MockedDogPetData.name)
  })
})
