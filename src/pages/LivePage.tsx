import { useEffect, useState } from "react";
import { getLiveMatches } from "../services/api/sports/live";
import type { LiveMatch } from '../services/api/sports/types';
import LiveEventCard from "../components/common/LiveEventCard";
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

const TabsTrigger: React.FC<TabsTriggerProps> = ({children }) => {
  return (
    <button 
      className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-colors text-gray-300 hover:text-white cursor-pointer"
      data-state="inactive"
    >
      {children}
    </button>
  );
};

const LivePage = () => {
  const [liveMatches, setLiveMatches] = useState<LiveMatch[]>([]);
  
    useEffect(() => {
      const fetchLiveData = async () => {
        try {
          const matches = await getLiveMatches();
          setLiveMatches(matches);
        } catch (error) {
          console.error("Failed to fetch live matches:", error);
        } 
      };
  
      fetchLiveData();
      const intervalId = setInterval(fetchLiveData, 30000); // Refresh every 30 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container px-4 py-8 mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-white">Live Events</h1>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="all">All Sports</TabsTrigger>
              <TabsTrigger value="football">Football</TabsTrigger>
              <TabsTrigger value="basketball">Basketball</TabsTrigger>
              <TabsTrigger value="tennis">Tennis</TabsTrigger>
              <TabsTrigger value="hockey">Hockey</TabsTrigger>
              <TabsTrigger value="baseball">Baseball</TabsTrigger>
              <TabsTrigger value="esports">Esports</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
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
    </div>
  );
};




export default LivePage;