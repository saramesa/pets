export enum PetKind {
  Dog = "dog",
  Cat = "cat",
}
export interface Pet {
  id: number
  name: string
  kind: PetKind
  weight: number
  height: number
  length: number
  lives?: number
  url: string
  description: string
  calculateHealth: () => string
}

export enum HealthStatus {
  Unhealthy = "💔 Unhealthy",
  Healthy = "❤️ Healthy",
  VeryHealthy = "💚 Very Healthy",
}

export interface PetData {
  id: number
  name: string
  kind: PetKind
  weight: number
  height: number
  length: number
  number_of_lives?: number
  photo_url: string
  description: string
}
