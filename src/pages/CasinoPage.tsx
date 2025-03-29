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
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-destructive-foreground",
    outline: "text-foreground"
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
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
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
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
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
  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8 mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Casino Games</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <Tabs defaultValue="all" className="w-full md:w-auto">
              <TabsList className="bg-background">
                <TabsTrigger value="all">All Games</TabsTrigger>
                <TabsTrigger value="slots">Slots</TabsTrigger>
                <TabsTrigger value="liveCasino">Live Casino</TabsTrigger>
                <TabsTrigger value="tableGames">Table Games</TabsTrigger>
                <TabsTrigger value="gameShows">Game Shows</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-80">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search games..."
                className="pl-10 bg-secondary border-none w-full h-10 text-sm focus:outline-none"
              />
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
              <ClockIcon className="h-3 w-3" />
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
    <Card className="overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
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
        <h3 className="font-medium text-sm truncate">{gameName}</h3>
        <span className="text-xs text-muted-foreground">{category}</span>
      </CardContent>
    </Card>
  );
};

export default CasinoPage;
