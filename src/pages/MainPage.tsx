
import SportsBanner from "../components/features/SportsBanner";
import LiveEvents from "../components/features/LiveEVents";
import FeaturedMatches from "../components/features/FeaturedMatches";
import CasinoPreview from "../components/common/CasinoPreview";
import PromotionBanner from "../components/features/PromotionBanner";

const Main = () => {
  return (
    <div className="min-h-screen">
      <SportsBanner />
      
      <div className="container px-4 py-8 mx-auto space-y-8">
        <LiveEvents />
        
        <FeaturedMatches />
        
        <PromotionBanner />
        
        <CasinoPreview />
      </div>
    </div>
  );
};

export default Main;