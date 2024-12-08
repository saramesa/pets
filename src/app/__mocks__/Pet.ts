import { createPet } from "@/app/services/pets/PetFactory"
import { MockedCatPetData, MockedDogPetData } from "./PetData"

export const MockedCat = createPet(MockedCatPetData)
export const MockedDog = createPet(MockedDogPetData)

export const MockedPets = [MockedDog, MockedCat]
