export interface Match {
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    league: string;
  }
  
  export interface LiveMatch extends Match {
    score: string;
    matchTime: string;
  }
  
  export const API_KEY = import.meta.env.VITE_SPORTS_API_KEY;
  export const BASE_URL = import.meta.env.VITE_SPORTS_URL
