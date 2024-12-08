import { useState, useEffect } from "react";
import { Pet } from "../types";

export const useGetPetOfTheDay = (pets: Pet[]) => {
  const [petOfTheDay, setPetOfTheDay] = useState<Pet | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to calculate the day of the year (1 - 365/366)
  const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const setPetOfTheDayInStorage = (pet: Pet) => {
    const today = new Date().toISOString().split("T")[0];
    const data = {
      date: today,
      pet,
    };
    localStorage.setItem("petOfTheDay", JSON.stringify(data));
  };

  const getPetOfTheDayFromStorage = () => {
    const today = new Date().toISOString().split("T")[0];
    const storedData = localStorage.getItem("petOfTheDay");

    if (storedData) {
      const { date, pet } = JSON.parse(storedData);
      if (date === today) {
        return pet;
      }
    }
    return null;
  };

  const handleClickPetOfTheDay = () => {
    const petOfTheDay = pets[getDayOfYear() % pets.length];
    setPetOfTheDay(petOfTheDay);
    setPetOfTheDayInStorage(petOfTheDay);
  };

  useEffect(() => {
    setIsLoading(true);

    const dayOfYear = getDayOfYear();

    const storedPet = getPetOfTheDayFromStorage();

    if (storedPet) {
      setPetOfTheDay(storedPet);
    } else {
      const pet = pets[dayOfYear % pets.length];
      setPetOfTheDay(pet);
      setPetOfTheDayInStorage(pet);
    }

    setIsLoading(false);
  }, [pets]); 

  return {
    petOfTheDay,
    handleClickPetOfTheDay,
    isLoading,
  };
};
