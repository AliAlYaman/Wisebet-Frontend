import { useState } from "react";
import { SearchIcon, FlameIcon, StarIcon, ClockIcon } from "../components/common/SportsIcons";

// Custom simple tabs
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

// Badge component
interface BadgeProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  
  const variantStyles = {
    default: "border-transparent bg-indigo-600 text-white",
    secondary: "border-transparent bg-gray-700 text-gray-300",
    destructive: "border-transparent bg-red-600 text-white",
    outline: "text-gray-300 border border-gray-600"
  };
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

// Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm ring-offset-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

// Card components
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`rounded-lg border border-gray-700 bg-gray-800 text-white shadow-sm ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
};

const CasinoPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container px-4 py-8 mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6 text-white">Casino Games</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="all">All Games</TabsTrigger>
                <TabsTrigger value="slots">Slots</TabsTrigger>
                <TabsTrigger value="liveCasino">Live Casino</TabsTrigger>
                <TabsTrigger value="tableGames">Table Games</TabsTrigger>
                <TabsTrigger value="gameShows">Game Shows</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className={`relative w-full md:w-96 transition-all duration-200 ${searchFocused ? 'md:w-[28rem]' : ''}`}>
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-200 ${searchFocused ? 'opacity-100' : ''}`}></div>
              <div className={`relative flex items-center border ${searchFocused ? 'border-indigo-400' : 'border-gray-700'} rounded-lg bg-gray-800 transition-all duration-200`}>
                <SearchIcon className={`ml-3 h-5 w-5 transition-colors duration-200 ${searchFocused ? 'text-indigo-400' : 'text-gray-400'}`} />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search games..."
                  className="w-full py-2.5 px-3 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mr-2 p-1 rounded-full text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-2 mb-6 space-x-2 scrollbar-hide">
            <Badge variant="secondary" className="cursor-pointer flex items-center gap-1">
              <FlameIcon className="h-3 w-3 text-red-500" />
              Popular
            </Badge>
            <Badge variant="secondary" className="cursor-pointer flex items-center gap-1">
              <StarIcon className="h-3 w-3 text-yellow-500" />
              Featured
            </Badge>
            <Badge variant="secondary" className="cursor-pointer flex items-center gap-1">
              <ClockIcon className="h-3 w-3 text-gray-400" />
              New
            </Badge>
            <Badge variant="secondary" className="cursor-pointer">Jackpots</Badge>
            <Badge variant="secondary" className="cursor-pointer">Blackjack</Badge>
            <Badge variant="secondary" className="cursor-pointer">Roulette</Badge>
            <Badge variant="secondary" className="cursor-pointer">Baccarat</Badge>
            <Badge variant="secondary" className="cursor-pointer">Poker</Badge>
            <Badge variant="secondary" className="cursor-pointer">Bonus Buy</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {Array(24).fill(0).map((_, i) => (
            <CasinoGameCard key={i} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CasinoGameCardProps {
  index: number;
}

const CasinoGameCard = ({ index }: CasinoGameCardProps) => {
  // Sample game data
  const gameNames = [
    "Sweet Bonanza", "Crazy Time", "Lightning Roulette", "Gonzo's Quest", 
    "Mega Fortune", "Book of Dead", "Starburst", "Blackjack VIP",
    "Monopoly Live", "Buffalo King", "Deal or No Deal", "Mega Ball",
    "Wolf Gold", "Divine Fortune", "Dead or Alive", "Big Bass Bonanza"
  ];
  
  const categories = ["Slots", "Live Casino", "Table Games", "Game Shows", "Jackpots"];
  
  // Select data based on index
  const gameName = gameNames[index % gameNames.length];
  const category = categories[index % categories.length];
  
  // Determine if game should have a special badge
  const isHot = index % 5 === 0;
  const isNew = index % 7 === 0;
  const isFeatured = index % 11 === 0;
  
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-700">
        <img
          src={`https://picsum.photos/seed/${index + 100}/300/225`}
          alt={gameName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {isHot && (
            <div className="bg-red-500 rounded-full px-2 py-1 text-xs font-medium text-white flex items-center">
              <FlameIcon className="h-3 w-3 mr-1" />
              HOT
            </div>
          )}
          {isNew && (
            <div className="bg-purple-500 rounded-full px-2 py-1 text-xs font-medium text-white flex items-center">
              <ClockIcon className="h-3 w-3 mr-1" />
              NEW
            </div>
          )}
          {isFeatured && (
            <div className="bg-yellow-500 rounded-full px-2 py-1 text-xs font-medium text-white flex items-center">
              <StarIcon className="h-3 w-3 mr-1" />
              TOP
            </div>
          )}
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm truncate text-white">{gameName}</h3>
        <span className="text-xs text-gray-400">{category}</span>
      </CardContent>
    </Card>
  );
};

export default CasinoPage;