import { HealthStatus, Pet, PetKind } from "../../types"

export class Dog implements Pet {
  id: number
  name: string
  kind = PetKind.Dog
  weight: number
  height: number
  length: number
  url: string
  description: string

  constructor({
    id,
    name,
    weight,
    height,
    length,
    url,
    description
  }: {
    id: number
    name: string
    weight: number
    height: number
    length: number
    url: string
  description: string
  }) {
    this.id = id
    this.name = name
    this.weight = weight
    this.height = height
    this.length = length
    this.url = url
    this.description = description
  }

  calculateHealth(): string {
    const health = this.weight / (this.height * this.length)
    if (health < 2 || health > 5) return HealthStatus.Unhealthy
    if (health >= 2 && health <= 3) return HealthStatus.VeryHealthy
    return HealthStatus.Healthy
  }
}
