import { CustomButton } from "./CustomButton";
import { CustomCard } from "./CustomCard";
import { ClockIcon, StarIcon } from "./SportsIcons";

// Create a simple toast function for now
const useCustomToast = () => {
  const toast = (options: { title: string; description: string }) => {
    console.log('Toast:', options.title, options.description);
    alert(`${options.title}: ${options.description}`);
  };
  
  return { toast };
};

interface OddsProps {
  value: number;
  label: string;
}

const Odds = ({ value, label }: OddsProps) => {
  const { toast } = useCustomToast();
  
  const handleOddsClick = () => {
    toast({
      title: "Selection Added",
      description: `${label} (${value.toFixed(2)}) has been added to your bet slip.`,
    });
  };

  return (
    <CustomButton 
      variant="outline" 
      className="flex-1 h-14 flex flex-col items-center justify-center gap-1 hover:border-betting hover:text-betting"
      onClick={handleOddsClick}
    >
      <span className="font-bold">{value.toFixed(2)}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </CustomButton>
  );
};

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  league: string;
  time: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  isFeatured?: boolean;
  isLive?: boolean;
}

const MatchCard = ({
  homeTeam,
  awayTeam,
  league,
  time,
  homeOdds,
  drawOdds,
  awayOdds,
  isFeatured = false,
  isLive = false,
}: MatchCardProps) => {
  return (
    <CustomCard className="overflow-hidden">
      {isFeatured && (
        <div className="bg-betting px-4 py-1 text-xs font-medium text-betting-foreground flex items-center justify-between">
          <span>Featured Match</span>
          <StarIcon className="h-3 w-3" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-muted-foreground">{league}</span>
          <div className="flex items-center text-xs">
            {isLive ? (
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse-opacity"></span>
                <span className="text-red-500 font-medium">LIVE</span>
              </div>
            ) : (
              <div className="flex items-center text-muted-foreground">
                <ClockIcon className="h-3 w-3 mr-1" />
                <span>{time}</span>
              </div>
            )}
          </div>
        </div>
        
        <h3 className="font-medium text-foreground">
          {homeTeam} vs {awayTeam}
        </h3>
        
        <div className="mt-4 flex gap-2">
          <Odds value={homeOdds} label={homeTeam} />
          <Odds value={drawOdds} label="Draw" />
          <Odds value={awayOdds} label={awayTeam} />
        </div>
        
        <CustomButton variant="ghost" className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground">
          +42 more markets
        </CustomButton>
      </div>
    </CustomCard>
  );
};

export default MatchCard;