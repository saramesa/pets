import { HealthStatus, Pet, PetKind } from "../../types"

export class Cat implements Pet {
  id: number
  name: string
  kind = PetKind.Cat
  weight: number
  height: number
  length: number
  lives: number
  description: string
  url: string

  constructor({
    id,
    name,
    description,
    weight,
    height,
    length,
    lives,
    url,
  }: {
    id: number
    name: string
    description: string
    weight: number
    height: number
    length: number
    lives: number
    url: string
  }) {
    this.description = description
    this.id = id
    this.name = name
    this.weight = weight
    this.height = height
    this.length = length
    this.lives = lives
    this.url = url
  }

  calculateHealth(): string {
    const health = this.weight / (this.height * this.length)
    if (this.lives === 1 || health < 2 || health > 5)
      return HealthStatus.Unhealthy
    if (health >= 2 && health <= 3) return HealthStatus.VeryHealthy
    return HealthStatus.Healthy
  }
}
