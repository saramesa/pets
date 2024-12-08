import { useState, useEffect } from "react"
import { Pet } from "../types"

export const useGetPetOfTheDay = (pets: Pet[]) => {
  const [petOfTheDay, setPetOfTheDay] = useState<Pet | null>(null)
  const getDayOfYear = () => {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now.getTime() - start.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }
  const dayOfYear = getDayOfYear()

  const getPetOfTheDayFromStorage = () => {
    const today = new Date().toISOString().split("T")[0]
    const storedData = localStorage.getItem("petOfTheDay")

    if (storedData) {
      const { date, pet } = JSON.parse(storedData)
      if (date === today) {
        return pet
      }
    }
    return null
  }

  const setPetOfTheDayInStorage = (pet: Pet) => {
    const today = new Date().toISOString().split("T")[0]
    const data = {
      date: today,
      pet,
    }
    localStorage.setItem("petOfTheDay", JSON.stringify(data))
  }

  const handleClickPetOfTheDay = () => {
    const petOfTheDay = pets[dayOfYear % pets.length]
    setPetOfTheDay(petOfTheDay)
    setPetOfTheDayInStorage(petOfTheDay)
  }

  useEffect(() => {
    const storedPet = getPetOfTheDayFromStorage()

    if (storedPet) {
      setPetOfTheDay(storedPet)
    }
  }, [pets, dayOfYear])

  return {
    petOfTheDay,
    handleClickPetOfTheDay,
  }
}
