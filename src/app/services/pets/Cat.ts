import { HealthStatus, Pet, PetKind } from "../../types"

export class Cat implements Pet {
  name: string
  kind = PetKind.Cat
  weight: number
  height: number
  length: number
  lives: number

  constructor(
    name: string,
    weight: number,
    height: number,
    length: number,
    lives: number
  ) {
    this.name = name
    this.weight = weight
    this.height = height
    this.length = length
    this.lives = lives
  }

  calculateHealth(): string {
    const health = this.weight / (this.height * this.length)
    if (this.lives === 1 || health < 2 || health > 5) return  HealthStatus.Unhealthy
    if (health >= 2 && health <= 3) return  HealthStatus.VeryHealthy
    return  HealthStatus.Healthy
  }
}
