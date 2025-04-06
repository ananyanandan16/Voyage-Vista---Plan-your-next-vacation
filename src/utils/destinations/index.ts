
import { getBeachDestinations } from './beachDestinations';
import { getCulturalDestinations } from './culturalDestinations';
import { getNatureDestinations } from './natureDestinations';
import { getCityDestinations } from './cityDestinations';
import { getEntertainmentDestinations } from './entertainmentDestinations';
import { getDefaultDestinations } from './defaultDestinations';
import { Destination } from '@/types/destination';
import { VacationType, Budget } from '@/types/quiz';

/**
 * Returns destination recommendations based on vacation type and budget
 */
export const getDestinationsByType = (
  vacationType: VacationType,
  budget: Budget
): Destination[] => {
  switch (vacationType) {
    case 'beach':
      return getBeachDestinations(budget);
    case 'cultural':
      return getCulturalDestinations(budget);
    case 'nature':
      return getNatureDestinations(budget);
    case 'city':
      return getCityDestinations(budget);
    case 'entertainment':
      return getEntertainmentDestinations(budget);
    default:
      return getDefaultDestinations();
  }
};
