import { LiveEventCardProps } from "../../models/ILiveEvents";
import { CustomCard } from "./CustomCard";

const LiveEventCard = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  time,
  league,
}: LiveEventCardProps) => {
  return (
    <CustomCard className="overflow-hidden bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-colors duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider truncate max-w-[120px]">
            {league}
          </span>
          <div className="flex items-center space-x-2 bg-gray-700/50 px-2 py-1 rounded-full">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
              <span className="text-xs font-bold text-red-500">LIVE</span>
            </div>
            <span className="text-xs font-medium text-gray-300">{time}</span>
          </div>
        </div>

        {/* Teams Section */}
        <div className="space-y-3">
          {/* Home Team */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* Add team logo here if available */}
              <span className="font-medium text-white truncate max-w-[100px] sm:max-w-[140px]">
                {homeTeam}
              </span>
            </div>
            <span className="text-xl font-bold text-white bg-gray-700/50 px-2.5 py-1 rounded-md min-w-[40px] text-center">
              {homeScore}
            </span>
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
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* Add team logo here if available */}
              <span className="font-medium text-white truncate max-w-[100px] sm:max-w-[140px]">
                {awayTeam}
              </span>
            </div>
            <span className="text-xl font-bold text-white bg-gray-700/50 px-2.5 py-1 rounded-md min-w-[40px] text-center">
              {awayScore}
            </span>
          </div>
        </div>

        {/* Match Progress (Optional) */}
        <div className="mt-4">
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-indigo-500 h-1.5 rounded-full" 
              style={{ width: `${parseInt(time.replace("'", "")) / 90 * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1st Half</span>
            <span>2nd Half</span>
          </div>
        </div>
      </div>
    </CustomCard>
  );
};

export default LiveEventCard;