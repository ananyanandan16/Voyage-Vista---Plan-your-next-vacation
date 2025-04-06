
export interface Destination {
  name: string;
  accommodation: string;
  reason: string;
  cost: string;
  duration: string;
  image: string;
}

export interface DestinationFilter {
  vacationType: import("./quiz").VacationType;
  budget: import("./quiz").Budget;
}
