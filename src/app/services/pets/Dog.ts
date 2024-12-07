import { HealthStatus, Pet, PetKind } from "../../types"

export class Dog implements Pet {
  name: string
  kind = PetKind.Dog
  weight: number
  height: number
  length: number

  constructor(name: string, weight: number, height: number, length: number) {
    this.name = name
    this.weight = weight
    this.height = height
    this.length = length
  }

  calculateHealth(): string {
    const health = this.weight / (this.height * this.length)
    if (health < 2 || health > 5) return HealthStatus.Unhealthy
    if (health >= 2 && health <= 3) return HealthStatus.VeryHealthy
    return HealthStatus.Healthy
  }
}
