import { PetKind } from "../types"

export const MockedDogPetData = {
  id: 27,
  name: "Anabelle",
  kind: PetKind.Dog,
  weight: 4912,
  height: 42,
  length: 120,
  photo_url: "https://cdn2.thedogapi.com/images/GGxeNU9xg.jpg",
  description: "I am bekom fat smol borking doggo with a long snoot for pats",
}

export const MockedCatPetData = {
  id: 20,
  name: "Chakra",
  kind: PetKind.Cat,
  weight: 1745,
  height: 26,
  length: 49,
  photo_url: "https://cdn2.thecatapi.com/images/ci2.jpg",
  description: "Leap into the air in greatest offense!",
  number_of_lives: 4,
}

export const MockedPetsData = [MockedDogPetData, MockedCatPetData]
