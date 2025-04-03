import { useEffect, useState, useCallback } from 'react';
import { CustomButton } from "../common/CustomButton";
import { ArrowRightIcon } from "../common/SportsIcons";
import MatchCard from "../common/MatchCard";
import { getUpcomingMatches } from '../../services/api/sports/upcoming';
import type { UpcomingMatch } from '../../services/api/sports/upcoming';

// Beirut time conversion (UTC+3)
const convertToBeirutTime = (dateStr: string, timeStr: string) => {
  const utcDate = new Date(`${dateStr}T${timeStr}Z`);
  const beirutDate = new Date(utcDate.getTime() - (2 * 60 * 60 * 1000));
  return {
    time: beirutDate.toTimeString().substring(0, 5),
    dateObject: beirutDate
  };
};

const formatMatchTime = (dateStr: string, timeStr: string) => {
  const { dateObject, time } = convertToBeirutTime(dateStr, timeStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const matchDate = new Date(dateObject);
  matchDate.setHours(0, 0, 0, 0);
  
  // Explicit conversion to timestamps
  const todayTime = today.getTime();
  const matchTime = matchDate.getTime();
  const diffDays = Math.round((matchTime - todayTime) / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return `Today, ${time}`;
  if (diffDays === 1) return `Tomorrow, ${time}`;
  
  return dateObject.toLocaleDateString('en-US', {
    timeZone: 'Asia/Beirut',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const FeaturedMatches = () => {
  const [featuredMatches, setFeaturedMatches] = useState<UpcomingMatch[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFeaturedMatches = useCallback(async () => {
    try {
      setLoading(true);
      const today = new Date();
      const toDate = new Date();
      toDate.setDate(today.getDate() + 5);
      
      const matches = await getUpcomingMatches(
        today.toISOString().split('T')[0],
        toDate.toISOString().split('T')[0]
      );

      // Sort with priority: Champions League > Europa League > Domestic leagues by time
      matches.sort((a, b) => {
        const aTime = convertToBeirutTime(a.event_date, a.event_time).dateObject;
        const bTime = convertToBeirutTime(b.event_date, b.event_time).dateObject;
        
        // UEFA competitions first
        if (a.league_name === 'Champions League') return -1;
        if (b.league_name === 'Champions League') return 1;
        if (a.league_name === 'Europa League') return -1;
        if (b.league_name === 'Europa League') return 1;
        
        // Then by time
        return aTime.getTime() - bTime.getTime();
      });

      setFeaturedMatches(matches.slice(0, 6));
    } catch (err) {
      console.error('Failed to load featured matches:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeaturedMatches();
  }, [fetchFeaturedMatches]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Top European Matches (Beirut Time)</h2>
        <CustomButton variant="link" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          View All <ArrowRightIcon className="h-4 w-4" />
        </CustomButton>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={`skeleton-${i}`} className="h-48 bg-gray-800 rounded-lg animate-pulse"></div>
          ))}
        </div>
      ) : featuredMatches.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No upcoming matches from selected countries/leagues
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredMatches.map((match) => (
            <MatchCard 
              key={match.event_key}
              homeTeam={match.event_home_team}
              awayTeam={match.event_away_team}
              league={match.league_name}
              country={match.country_name}
              time={formatMatchTime(match.event_date, match.event_time)}
              homeLogo={match.home_team_logo}
              awayLogo={match.away_team_logo}
              leagueLogo={match.league_logo}
              isFeatured={true}
              homeOdds={0}
              drawOdds={0}
              awayOdds={0}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedMatches;