
import { QuizAnswers } from "@/types/quiz";
import { Destination } from "@/types/destination";
import { getDestinationsByType } from "./destinations";
import { getDefaultDestinations } from "./destinations/defaultDestinations";

export { Destination };

/**
 * Generates destination recommendations based on quiz answers
 * @param answers The quiz answers provided by the user
 * @returns Array of unique destination recommendations (up to 3)
 */
export const generateRecommendations = (answers: QuizAnswers): Destination[] => {
  const mockDestinations: Destination[] = [];
  
  // If we have both vacation type and budget, get specific recommendations
  if (answers.vacationType && answers.budget) {
    const destinations = getDestinationsByType(answers.vacationType, answers.budget);
    mockDestinations.push(...destinations);
  }
  
  // If no destinations were found, use default recommendations
  if (mockDestinations.length === 0) {
    mockDestinations.push(...getDefaultDestinations());
  }

  // Ensure we have unique recommendations (no duplicates)
  const uniqueDestinations = Array.from(
    new Map(mockDestinations.map(dest => [dest.name, dest])).values()
  );
  
  // Return up to 3 destinations
  return uniqueDestinations.slice(0, 3);
};
