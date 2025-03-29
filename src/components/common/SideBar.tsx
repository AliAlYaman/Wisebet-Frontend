import { CustomButton } from "./CustomButton";
import { 
  FootballIcon, 
  BasketballIcon, 
  TargetIcon, 
  TennisIcon, 
  PlusCircleIcon, 
  TrashIcon, 
  DollarSignIcon,
  MinusIcon
} from "./SportsIcons";

interface BetSlipItem {
  id: string;
  match: string;
  selection: string;
  odds: number;
}

const Sidebar = () => {
  // Simple toast function for now
  const useCustomToast = () => {
    const toast = (options: { title: string; description: string }) => {
      console.log('Toast:', options.title, options.description);
      alert(`${options.title}: ${options.description}`);
    };
    
    return { toast };
  };
  
  const { toast } = useCustomToast();
  
  // Sample bet slip data
  const betSlip: BetSlipItem[] = [
    {
      id: "1",
      match: "Arsenal vs Chelsea",
      selection: "Arsenal to win",
      odds: 2.10
    },
    {
      id: "2",
      match: "Lakers vs Warriors",
      selection: "Over 220.5 points",
      odds: 1.90
    }
  ];
  
  const totalOdds = betSlip.reduce((acc, bet) => acc * bet.odds, 1).toFixed(2);
  
  const placeBet = () => {
    toast({
      title: "Bet Placed Successfully!",
      description: `Your bet slip with ${betSlip.length} selections has been confirmed.`,
    });
  };

  return (
    <div className="flex flex-col h-full border-l border-border bg-sidebar">
      {/* Popular Sports Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">POPULAR SPORTS</h3>
        <nav className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent group">
            <FootballIcon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-foreground">Football</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent group">
            <BasketballIcon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-foreground">Basketball</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent group">
            <TennisIcon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-foreground">Tennis</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent group">
            <TargetIcon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="text-foreground">Darts</span>
          </a>
        </nav>
      </div>
      
      <div className="bg-border h-px w-full"></div>
      
      {/* Bet Slip Section */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h3 className="text-sm font-medium mb-3 text-muted-foreground">BET SLIP</h3>
          
          <div className="flex-1 max-h-[calc(100vh-400px)] overflow-auto">
            {betSlip.length > 0 ? (
              <div className="space-y-3">
                {betSlip.map((bet) => (
                  <div key={bet.id} className="bg-sidebar-accent rounded-md p-3">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">{bet.match}</span>
                      <CustomButton variant="ghost" size="icon" className="h-5 w-5 text-muted-foreground hover:text-destructive">
                        <MinusIcon className="h-4 w-4" />
                      </CustomButton>
                    </div>
                    <div className="mt-1 text-sm font-medium">{bet.selection}</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">Odds</span>
                      <span className="text-sm font-medium text-betting">{bet.odds.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <PlusCircleIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">Your bet slip is empty</p>
                <p className="text-xs text-muted-foreground mt-1">Select odds to add bets</p>
              </div>
            )}
          </div>
        </div>
        
        {betSlip.length > 0 && (
          <>
            <div className="bg-border h-px w-full"></div>
            
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Odds:</span>
                  <span className="font-medium">{totalOdds}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <DollarSignIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="number" 
                      className="w-full pl-9 pr-3 py-2 bg-sidebar-accent border-none rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-betting" 
                      placeholder="Stake"
                    />
                  </div>
                  <div className="bg-sidebar-accent p-2 rounded-md">
                    <span className="text-xs text-muted-foreground">Potential Win</span>
                    <p className="font-medium text-sm">$0.00</p>
                  </div>
                </div>
                
                <CustomButton 
                  className="w-full bg-betting hover:bg-betting-dark text-betting-foreground"
                  onClick={placeBet}
                >
                  Place Bet
                </CustomButton>
                
                <CustomButton 
                  variant="outline" 
                  className="w-full text-sm flex items-center justify-center gap-1"
                >
                  <TrashIcon className="h-4 w-4" />
                  Clear Slip
                </CustomButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;