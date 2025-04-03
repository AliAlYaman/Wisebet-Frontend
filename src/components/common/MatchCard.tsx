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
      className="flex-1 h-14 flex flex-col items-center justify-center gap-1 hover:border-indigo-500 hover:text-indigo-500 border-gray-700"
      onClick={handleOddsClick}
    >
      <span className="font-bold text-white">{value.toFixed(2)}</span>
      <span className="text-xs text-gray-400">{label}</span>
    </CustomButton>
  );
};

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  league: string;
  country?: string;
  time: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  homeLogo?: string;
  awayLogo?: string;
  leagueLogo?: string;
  isFeatured?: boolean;
  isLive?: boolean;
}

const MatchCard = ({
  homeTeam,
  awayTeam,
  league,
  country,
  time,
  homeOdds,
  drawOdds,
  awayOdds,
  homeLogo,
  awayLogo,
  leagueLogo,
  isFeatured = false,
  isLive = false,
}: MatchCardProps) => {
  return (
    <CustomCard className="overflow-hidden bg-gray-800 border-gray-700 hover:border-indigo-500 transition-colors duration-200">
      {isFeatured && (
        <div className="bg-indigo-600 px-4 py-1 text-xs font-medium text-white flex items-center justify-between">
          <span>Featured Match</span>
          <StarIcon className="h-3 w-3" />
        </div>
      )}
      
      <div className="p-4">
        {/* League Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center space-x-2">
            {leagueLogo && (
              <div className="w-4 h-4 relative">
                <img
                  src={leagueLogo}
                  alt={league}
                  className="rounded-sm"
                  onError={(e: any) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            <span className="text-xs text-gray-400 truncate max-w-[120px]">
              {country ? `${country} • ${league}` : league}
            </span>
          </div>
          <div className="flex items-center text-xs">
            {isLive ? (
              <div className="flex items-center bg-red-500/10 px-2 py-1 rounded-full">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1 animate-pulse"></span>
                <span className="text-red-500 font-medium">LIVE</span>
              </div>
            ) : (
              <div className="flex items-center text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                <ClockIcon className="h-3 w-3 mr-1" />
                <span>{time}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Teams Section */}
        <div className="flex flex-col space-y-3">
          {/* Home Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {homeLogo && (
                <div className="w-6 h-6 relative">
                  <img
                    src={homeLogo}
                    alt={homeTeam}                  
                    onError={(e: any) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <span className="font-medium text-white truncate max-w-[120px]">
                {homeTeam}
              </span>
            </div>
            {isLive && (
              <span className="text-sm font-bold text-white bg-gray-700/50 px-2 py-0.5 rounded">
                {homeOdds.toFixed(2)}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 text-xs text-gray-400 bg-gray-800">vs</span>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {awayLogo && (
                <div className="w-6 h-6 relative">
                  <img
                    src={awayLogo}
                    alt={awayTeam}
                    onError={(e: any) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <span className="font-medium text-white truncate max-w-[120px]">
                {awayTeam}
              </span>
            </div>
            {isLive && (
              <span className="text-sm font-bold text-white bg-gray-700/50 px-2 py-0.5 rounded">
                {awayOdds.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        
        {/* Odds Section */}
        {!isLive && (
          <>
            <div className="mt-4 flex gap-2">
              <Odds value={homeOdds} label="1" />
              <Odds value={drawOdds} label="X" />
              <Odds value={awayOdds} label="2" />
            </div>
            
            <CustomButton 
              variant="ghost" 
              className="w-full mt-2 text-xs text-gray-500 hover:text-white"
            >
              +42 more markets
            </CustomButton>
          </>
        )}

        {/* Live Match Progress (optional) */}
        {isLive && (
          <div className="mt-3">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div 
                className="bg-indigo-500 h-1 rounded-full" 
                style={{ width: `${Math.min(parseInt(time.replace("'", "")) / 90 * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1H</span>
              <span>HT</span>
              <span>2H</span>
              <span>FT</span>
            </div>
          </div>
        )}
      </div>
    </CustomCard>
  );
};

export default MatchCard;