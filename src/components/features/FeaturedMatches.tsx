import { CustomButton } from "../common/CustomButton";
import { ArrowRightIcon } from "../common/SportsIcons";
import MatchCard from "../common/MatchCard";

const FeaturedMatches = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Featured Matches</h2>
        <CustomButton variant="link" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          View All <ArrowRightIcon className="h-4 w-4" />
        </CustomButton>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MatchCard 
          homeTeam="Arsenal"
          awayTeam="Chelsea"
          league="Premier League"
          time="Today, 20:00"
          homeOdds={2.10}
          drawOdds={3.40}
          awayOdds={3.60}
          isFeatured={true}
        />
        
        <MatchCard 
          homeTeam="Barcelona"
          awayTeam="Real Madrid"
          league="La Liga"
          time="Tomorrow, 21:00"
          homeOdds={1.90}
          drawOdds={3.50}
          awayOdds={4.20}
          isFeatured={true}
        />
        
        <MatchCard 
          homeTeam="PSG"
          awayTeam="Bayern Munich"
          league="Champions League"
          time="Wed, 20:00"
          homeOdds={2.40}
          drawOdds={3.30}
          awayOdds={2.90}
          isFeatured={true}
        />
        
        <MatchCard 
          homeTeam="Liverpool"
          awayTeam="Man City"
          league="Premier League"
          time="Sat, 17:30"
          homeOdds={2.60}
          drawOdds={3.40}
          awayOdds={2.70}
        />
        
        <MatchCard 
          homeTeam="Milan"
          awayTeam="Inter"
          league="Serie A"
          time="Sun, 20:45"
          homeOdds={2.80}
          drawOdds={3.20}
          awayOdds={2.60}
        />
        
        <MatchCard 
          homeTeam="Lakers"
          awayTeam="Warriors"
          league="NBA"
          time="Today, 03:30"
          homeOdds={1.85}
          drawOdds={12.00}
          awayOdds={1.95}
        />
      </div>
    </div>
  );
};

export default FeaturedMatches;