
export type VacationType = 'cultural' | 'nature' | 'beach' | 'city' | 'entertainment';
export type Activity = 'sightseeing' | 'adventure' | 'nightlife' | 'food' | 'shopping';
export type Budget = 'budget' | 'moderate' | 'luxury' | 'unlimited';
export type Duration = '1-3' | '4-7' | '8-14' | '15+';

export interface QuizAnswers {
  vacationType?: VacationType;
  activities?: Activity[];
  budget?: Budget;
  duration?: Duration;
}
