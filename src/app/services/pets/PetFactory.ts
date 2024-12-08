import { Pet, PetData, PetKind } from "@/app/types"
import { Cat } from "./Cat"
import { Dog } from "./Dog"

type PetConstructor = (data: PetData) => Pet

class PetFactory {
  private static readonly petConstructors: Record<PetKind, PetConstructor> = {
    [PetKind.Cat]: (data: PetData) =>
      new Cat({
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        length: data.length,
        lives: data.number_of_lives || 0,
        description: data.description,
        url: data.photo_url,
      }),
    [PetKind.Dog]: (data: PetData) =>
      new Dog({
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        length: data.length,
        url: data.photo_url,
        description: data.description,
      }),
  }

  static create(data: PetData): Pet {
    const { kind } = data
    const constructor = this.petConstructors[kind]

    if (!constructor) {
      throw new Error(`Unknown pet kind: ${kind}`)
    }

    return constructor(data)
  }
}

export function createPet(data: PetData): Pet {
  return PetFactory.create(data)
}
