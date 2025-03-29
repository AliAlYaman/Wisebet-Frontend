import { CustomButton } from "./CustomButton";
import { CustomCard, CustomCardContent } from "./CustomCard";
import { ArrowRightIcon, FlameIcon } from "./SportsIcons";

interface GameCardProps {
  name: string;
  category: string;
  imgUrl: string;
  hot?: boolean;
}

const GameCard = ({ name, category, imgUrl, hot }: GameCardProps) => {
  return (
    <CustomCard className="overflow-hidden group cursor-pointer bg-gray-800 border-gray-700">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={imgUrl} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hot && (
          <div className="absolute top-2 right-2 bg-red-500 rounded-full px-2 py-1 text-xs font-medium text-white flex items-center">
            <FlameIcon className="h-3 w-3 mr-1" />
            HOT
          </div>
        )}
      </div>
      <CustomCardContent className="p-3">
        <h3 className="font-medium text-sm text-white">{name}</h3>
        <span className="text-xs text-gray-400">{category}</span>
      </CustomCardContent>
    </CustomCard>
  );
};

const CasinoPreview = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Casino Games</h2>
        <CustomButton variant="link" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          View Casino <ArrowRightIcon className="h-4 w-4" />
        </CustomButton>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <GameCard 
          name="Lightning Roulette"
          category="Table Games"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          hot={true}
        />
        
        <GameCard 
          name="Mega Fortune"
          category="Slots"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
        
        <GameCard 
          name="Blackjack VIP"
          category="Live Casino"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          hot={true}
        />
        
        <GameCard 
          name="Sweet Bonanza"
          category="Slots"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
        
        <GameCard 
          name="Crazy Time"
          category="Game Shows"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          hot={true}
        />
        
        <GameCard 
          name="Gonzo's Quest"
          category="Slots"
          imgUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </div>
  );
};

export default CasinoPreview;