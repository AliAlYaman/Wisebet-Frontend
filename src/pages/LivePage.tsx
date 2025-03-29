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

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children }) => {
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
          {Array(9).fill(0).map((_, i) => (
            <LiveEventCard key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LiveEventCardProps {
  index: number;
}

const LiveEventCard = ({ index }: LiveEventCardProps) => {
  // Sample data arrays to generate different live events
  const sports = ["Football", "Basketball", "Tennis", "Hockey", "Baseball", "Esports"];
  const teams = [
    ["Arsenal", "Chelsea"], 
    ["Barcelona", "Real Madrid"], 
    ["Liverpool", "Man City"],
    ["Lakers", "Warriors"],
    ["Celtics", "Nets"],
    ["Nadal", "Djokovic"],
    ["Avalanche", "Lightning"],
    ["Yankees", "Red Sox"]
  ];
  const leagues = ["Premier League", "La Liga", "NBA", "ATP", "NHL", "MLB", "ESL"];
  
  // Select random data based on index
  const sportIndex = index % sports.length;
  const teamIndex = index % teams.length;
  const leagueIndex = index % leagues.length;
  
  const sport = sports[sportIndex];
  const matchup = teams[teamIndex];
  const league = leagues[leagueIndex];
  
  // Different scores and times based on the sport
  let homeScore, awayScore, time;
  
  if (sport === "Basketball") {
    homeScore = 65 + Math.floor(Math.random() * 50);
    awayScore = 65 + Math.floor(Math.random() * 50);
    const quarters = ["Q1", "Q2", "Q3", "Q4"];
    const quarter = quarters[Math.floor(Math.random() * 4)];
    time = `${quarter} ${Math.floor(Math.random() * 12)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
  } else if (sport === "Tennis") {
    homeScore = Math.floor(Math.random() * 3);
    awayScore = Math.floor(Math.random() * 3);
    const sets = homeScore > awayScore 
      ? `${homeScore}-${awayScore}` 
      : `${awayScore}-${homeScore}`;
    time = `Set ${Math.min(homeScore, awayScore) + 1}`;
  } else {
    homeScore = Math.floor(Math.random() * 4);
    awayScore = Math.floor(Math.random() * 4);
    time = `${Math.floor(Math.random() * 90)}'`;
  }
  
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700">
      <div className="px-4 py-3 flex justify-between items-center border-b border-gray-700">
        <span className="text-xs text-gray-400">{league}</span>
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
          <span className="text-xs text-red-500 font-medium mr-2">LIVE</span>
          <span className="text-xs text-gray-400">{time}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-xs text-blue-400">{matchup[0].substring(0, 2)}</span>
            </div>
            <span className="font-medium text-white">{matchup[0]}</span>
          </div>
          <span className="text-xl font-bold text-white">{homeScore}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <div className="bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-xs text-blue-400">{matchup[1].substring(0, 2)}</span>
            </div>
            <span className="font-medium text-white">{matchup[1]}</span>
          </div>
          <span className="text-xl font-bold text-white">{awayScore}</span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button className="bg-gray-700 hover:bg-indigo-600 hover:text-white transition-colors p-2 rounded text-center">
            <div className="font-bold text-white">{(1 + Math.random() * 4).toFixed(2)}</div>
            <div className="text-xs text-gray-400">1</div>
          </button>
          
          <button className="bg-gray-700 hover:bg-indigo-600 hover:text-white transition-colors p-2 rounded text-center">
            <div className="font-bold text-white">{(3 + Math.random() * 2).toFixed(2)}</div>
            <div className="text-xs text-gray-400">X</div>
          </button>
          
          <button className="bg-gray-700 hover:bg-indigo-600 hover:text-white transition-colors p-2 rounded text-center">
            <div className="font-bold text-white">{(1 + Math.random() * 4).toFixed(2)}</div>
            <div className="text-xs text-gray-400">2</div>
          </button>
        </div>
        
        <button className="w-full mt-2 text-xs text-center text-gray-500 hover:text-white">
          +{100 + Math.floor(Math.random() * 200)} more markets
        </button>
      </div>
    </div>
  );
};

export default LivePage;