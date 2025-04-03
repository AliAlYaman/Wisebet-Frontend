import axios from 'axios';
import { LiveMatch, API_KEY, BASE_URL } from './types';

export const getLiveMatches = async (): Promise<LiveMatch[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/`, {
      params: {
        met: "Livescore",
        APIkey: API_KEY
      }
    });

    if (!response.data.result) {
      throw new Error("No live matches found");
    }

    return response.data.result.map((match: any) => ({
      homeTeam: match.event_home_team,
      awayTeam: match.event_away_team,
      score: match.event_final_result || "0-0",
      matchTime: match.event_status,
      date: match.event_date,
      time: match.event_time,
      league: match.league_name
    }));

  } catch (error) {
    console.error("Error fetching live matches:", error);
    return [];
  }
};

// Example usage:
// getLiveMatches().then(console.log);