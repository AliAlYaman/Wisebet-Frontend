import axios from 'axios';
import { API_KEY, BASE_URL } from './types';

// Define our filtering criteria
const FEATURED_COUNTRIES = new Set([
  'England',
  'Spain',
  'Italy',
  'Germany',
  'France'
]);

const FEATURED_LEAGUES = new Set([
  'Champions League',
  'Europa League'
]);

export interface UpcomingMatch {
  event_key: string;
  event_date: string;
  event_time: string;
  event_home_team: string;
  event_away_team: string;
  league_name: string;
  country_name: string;
  home_team_logo: string;
  away_team_logo: string;
  league_logo: string;
}

export const getUpcomingMatches = async (fromDate: string, toDate: string): Promise<UpcomingMatch[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        met: "Fixtures",
        APIkey: API_KEY,
        from: fromDate,
        to: toDate
      }
    });

    if (!response.data.result) {
      throw new Error("No matches found");
    }

    // Filter matches from featured countries OR featured leagues (UEFA competitions)
    const filteredMatches = response.data.result
      .filter((match: any) => 
        FEATURED_COUNTRIES.has(match.country_name) ||
        FEATURED_LEAGUES.has(match.league_name)
      )
      .map((match: any) => ({
        event_key: match.event_key,
        event_date: match.event_date,
        event_time: match.event_time,
        event_home_team: match.event_home_team,
        event_away_team: match.event_away_team,
        league_name: match.league_name,
        country_name: match.country_name,
        home_team_logo: match.home_team_logo || '',
        away_team_logo: match.away_team_logo || '',
        league_logo: match.league_logo || ''
      }));

    console.log(`Filtered ${response.data.result.length - filteredMatches.length} non-featured matches`);
    return filteredMatches;

  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    return [];
  }
};