import { CustomButton } from "../common/CustomButton";
import { CustomCard } from "../common/CustomCard";
import { ArrowRightIcon } from "../common/SportsIcons";
import { getLiveMatches } from '../../services/api/sports/live'; // Adjust path as needed
import type { LiveMatch } from '../../services/api/sports/types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LiveEventCard from "../common/LiveEventCard";

// Custom tabs implementation
interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

const TabsList: React.FC<TabsListProps> = ({ className, children }) => {
  return (
    <div className={`bg-gray-800 flex rounded-md p-1 ${className}`}>
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children }) => {
  return (
    <button
      className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-colors text-gray-300 hover:text-white cursor-pointer"
      data-state="inactive"
    >
      {children}
    </button>
  );
};

const LiveEvents = () => {
  const [liveMatches, setLiveMatches] = useState<LiveMatch[]>([]);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const matches = await getLiveMatches();
        setLiveMatches(matches.slice(0,3));
      } catch (error) {
        console.error("Failed to fetch live matches:", error);
      } 
    };

    fetchLiveData();
    const intervalId = setInterval(fetchLiveData, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
            <span>Live Events</span>
          </div>
        </h2>
        <Link to={'live'}>
        <CustomButton variant="link" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          View All <ArrowRightIcon className="h-4 w-4" />
        </CustomButton>
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
          <TabsTrigger value="basketball">Basketball</TabsTrigger>
          <TabsTrigger value="tennis">Tennis</TabsTrigger>
          <TabsTrigger value="esports">Esports</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {liveMatches.map((match) => (
          <LiveEventCard
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeScore={parseInt(match.score.split('-')[0])}
            awayScore={parseInt(match.score.split('-')[1])}
            time={match.matchTime}
            league={match.league}
          />
        ))}
      </div>
    </div>
  );
};

interface LiveEventCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  league: string;
  isBasketball?: boolean;
}
export default LiveEvents;