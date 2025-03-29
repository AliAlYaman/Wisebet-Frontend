import { CustomButton } from "../common/CustomButton";
import { CustomCard, CustomCardContent } from "../common/CustomCard";
import { ArrowRightIcon, ClockIcon, StarIcon } from "../common/SportsIcons";

// Custom tabs implementation
interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => {
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
    <div className={`bg-background flex rounded-md p-1 ${className}`}>
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
      className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=active]:bg-betting data-[state=active]:text-betting-foreground transition-colors"
      data-state="inactive"
    >
      {children}
    </button>
  );
};

const LiveEvents = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse-opacity"></span>
            <span>Live Events</span>
          </div>
        </h2>
        <CustomButton variant="link" className="text-betting flex items-center gap-1">
          View All <ArrowRightIcon className="h-4 w-4" />
        </CustomButton>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-background">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="football">Football</TabsTrigger>
          <TabsTrigger value="basketball">Basketball</TabsTrigger>
          <TabsTrigger value="tennis">Tennis</TabsTrigger>
          <TabsTrigger value="esports">Esports</TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <LiveEventCard 
          homeTeam="Arsenal" 
          awayTeam="Tottenham" 
          homeScore={2}
          awayScore={1}
          time="64'"
          league="Premier League"
          homeLogo="/placeholder.svg"
          awayLogo="/placeholder.svg"
        />
        
        <LiveEventCard 
          homeTeam="Bayern Munich" 
          awayTeam="Dortmund" 
          homeScore={3}
          awayScore={2}
          time="78'"
          league="Bundesliga"
          homeLogo="/placeholder.svg"
          awayLogo="/placeholder.svg"
        />
        
        <LiveEventCard 
          homeTeam="Lakers" 
          awayTeam="Warriors" 
          homeScore={87}
          awayScore={82}
          time="Q3 8:24"
          league="NBA"
          homeLogo="/placeholder.svg"
          awayLogo="/placeholder.svg"
          isBasketball={true}
        />
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
  homeLogo: string;
  awayLogo: string;
  isBasketball?: boolean;
}

const LiveEventCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  time,
  league,
  homeLogo,
  awayLogo,
  isBasketball = false,
}: LiveEventCardProps) => {
  return (
    <CustomCard className="overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-muted-foreground">{league}</span>
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse-opacity"></span>
              <span className="text-xs text-red-500 font-medium">LIVE</span>
            </div>
            <span className="text-xs text-muted-foreground ml-2">{time}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <img src={homeLogo} alt={homeTeam} className="w-4 h-4" />
            </div>
            <span className="font-medium">{homeTeam}</span>
          </div>
          <span className="text-xl font-bold">{homeScore}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <div className="bg-secondary rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <img src={awayLogo} alt={awayTeam} className="w-4 h-4" />
            </div>
            <span className="font-medium">{awayTeam}</span>
          </div>
          <span className="text-xl font-bold">{awayScore}</span>
        </div>
        
        <CustomCardContent className="p-0 mt-4">
          <div className="grid grid-cols-3 gap-2">
            <CustomButton 
              variant="outline" 
              className="h-10 flex flex-col items-center justify-center gap-1 hover:border-betting hover:text-betting"
            >
              <span className="font-bold">1.95</span>
              <span className="text-xs text-muted-foreground">1</span>
            </CustomButton>
            
            <CustomButton 
              variant="outline" 
              className="h-10 flex flex-col items-center justify-center gap-1 hover:border-betting hover:text-betting"
            >
              <span className="font-bold">3.40</span>
              <span className="text-xs text-muted-foreground">X</span>
            </CustomButton>
            
            <CustomButton 
              variant="outline" 
              className="h-10 flex flex-col items-center justify-center gap-1 hover:border-betting hover:text-betting"
            >
              <span className="font-bold">4.20</span>
              <span className="text-xs text-muted-foreground">2</span>
            </CustomButton>
          </div>
          
          <CustomButton variant="ghost" className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground">
            +{isBasketball ? 180 : 250} more markets
          </CustomButton>
        </CustomCardContent>
      </div>
    </CustomCard>
  );
};

export default LiveEvents;
