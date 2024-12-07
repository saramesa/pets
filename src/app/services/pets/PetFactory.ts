import { Pet, PetKind, PetData } from "../../types"
import { Cat } from "./Cat"
import { Dog } from "./Dog"

const petConstructors = {
  [PetKind.Cat]: (data: PetData) =>
    new Cat(
      data.name,
      data.weight,
      data.height,
      data.length,
      data.number_of_lives || 0
    ),
  [PetKind.Dog]: (data: PetData) =>
    new Dog(data.name, data.weight, data.height, data.length),
}

export function createPet(data: PetData): Pet {
  const { kind } = data

  const constructor = petConstructors[kind]

  if (!constructor) {
    throw new Error(`Unknown pet kind: ${kind}`)
  }

  return constructor(data)
}
