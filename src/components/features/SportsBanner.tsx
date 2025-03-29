import { useState } from "react";
import { CustomButton } from "../common/CustomButton";
import { 
  FootballIcon, 
  BasketballIcon, 
  TargetIcon, 
  TennisIcon, 
  BaseballIcon, 
  TrophyIcon, 
  BadgeCheckIcon, 
  GolfIcon,
  BikeIcon,
  ChevronRightIcon
} from "../common/SportsIcons";

// Simple custom tabs implementation
const CustomTabs = ({ value, onValueChange, children, className }: any) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const CustomTabsList = ({ children, className }: any) => {
  return (
    <div className={`bg-gray-800 flex rounded-md p-1 ${className}`}>
      {children}
    </div>
  );
};

const CustomTabsTrigger = ({ value, children, onClick, activeValue }: any) => {
  return (
    <button 
      onClick={() => onClick(value)}
      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
        value === activeValue 
          ? "bg-indigo-600 text-white" 
          : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

const CustomTabsContent = ({ value, activeValue, children, className }: any) => {
  if (value !== activeValue) return null;
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const sports = [
  { name: "Football", icon: FootballIcon },
  { name: "Basketball", icon: BasketballIcon },
  { name: "Tennis", icon: TennisIcon },
  { name: "Baseball", icon: BaseballIcon },
  { name: "Golf", icon: GolfIcon },
  { name: "Darts", icon: TargetIcon },
  { name: "Boxing", icon: BadgeCheckIcon },
  { name: "Table Tennis", icon: BikeIcon },
  { name: "eSports", icon: TrophyIcon },
];

const SportsBanner = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  return (
    <div className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <CustomTabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-4">
            <CustomTabsList className="bg-gray-800">
              <CustomTabsTrigger 
                value="all" 
                onClick={(val: string) => setActiveTab(val)} 
                activeValue={activeTab}
              >
                All Sports
              </CustomTabsTrigger>
              <CustomTabsTrigger 
                value="live" 
                onClick={(val: string) => setActiveTab(val)} 
                activeValue={activeTab}
              >
                Live Now
              </CustomTabsTrigger>
              <CustomTabsTrigger 
                value="upcoming" 
                onClick={(val: string) => setActiveTab(val)} 
                activeValue={activeTab}
              >
                Upcoming
              </CustomTabsTrigger>
            </CustomTabsList>
            
            <CustomButton variant="ghost" size="sm" className="text-xs gap-1 text-gray-400 hover:text-white">
              See All <ChevronRightIcon className="h-3 w-3" />
            </CustomButton>
          </div>
          
          <CustomTabsContent value="all" activeValue={activeTab} className="mt-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
              {sports.map((sport) => (
                <CustomButton 
                  key={sport.name}
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 border border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <sport.icon className="h-6 w-6 mb-2 text-white" />
                  <span className="text-xs text-white">{sport.name}</span>
                </CustomButton>
              ))}
            </div>
          </CustomTabsContent>
          
          <CustomTabsContent value="live" activeValue={activeTab} className="mt-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
              {sports.slice(0, 5).map((sport) => (
                <CustomButton 
                  key={sport.name}
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 border border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <sport.icon className="h-6 w-6 mb-2 text-white" />
                  <span className="text-xs text-white">{sport.name}</span>
                </CustomButton>
              ))}
            </div>
          </CustomTabsContent>
          
          <CustomTabsContent value="upcoming" activeValue={activeTab} className="mt-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
              {sports.slice(3, 9).map((sport) => (
                <CustomButton 
                  key={sport.name}
                  variant="outline" 
                  className="flex flex-col items-center justify-center h-20 border border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <sport.icon className="h-6 w-6 mb-2 text-white" />
                  <span className="text-xs text-white">{sport.name}</span>
                </CustomButton>
              ))}
            </div>
          </CustomTabsContent>
        </CustomTabs>
      </div>
    </div>
  );
};

export default SportsBanner;