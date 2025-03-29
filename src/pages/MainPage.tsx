import SportsBanner from "../components/features/SportsBanner";
import LiveEvents from "../components/features/LiveEvents";
import FeaturedMatches from "../components/features/FeaturedMatches";
import CasinoPreview from "../components/common/CasinoPreview";
import PromotionBanner from "../components/features/PromotionBanner";

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <SportsBanner />
      
      <div className="container px-4 py-8 mx-auto space-y-8">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          <LiveEvents />
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          <FeaturedMatches />
        </div>
        
        <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg">
          <PromotionBanner />
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          <CasinoPreview />
        </div>
      </div>
    </div>
  );
};

export default Main;