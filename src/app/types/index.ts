export enum PetKind {
  Dog = "dog",
  Cat = "cat",
}
export interface Pet {
name: string
kind: PetKind
weight: number
height: number
length: number
lives?: number
calculateHealth: () => string
}

export enum HealthStatus {
Unhealthy = "💔 Unhealthy",
Healthy = "❤️ Healthy",
VeryHealthy = "💚 Very Healthy",
}

export interface PetData {
name: string;
kind: PetKind;
weight: number;
height: number;
length: number;
number_of_lives?: number;
photo_url: string;
description: string;
}