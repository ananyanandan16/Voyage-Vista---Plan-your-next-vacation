
export type VacationType = 'cultural' | 'nature' | 'beach' | 'city' | 'entertainment';
export type Activity = 'sightseeing' | 'adventure' | 'nightlife' | 'food' | 'shopping';

export interface QuizAnswers {
  vacationType?: VacationType;
  activities?: Activity[];
  budget?: string;
  duration?: string;
}
