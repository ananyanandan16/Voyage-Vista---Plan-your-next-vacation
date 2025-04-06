
import { VacationType, Budget } from "@/types/quiz";

export interface Destination {
  name: string;
  accommodation: string;
  reason: string;
  cost: string;
  duration: string;
  image: string;
}

export interface DestinationFilter {
  vacationType: VacationType;
  budget: Budget;
}
