import {
  FootballIcon,
  BasketballIcon,
  TargetIcon,
  TennisIcon,
} from "./SportsIcons";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full border-l border-gray-700 bg-gray-800">
      {/* Popular Sports Section */}
      <div className="p-4">
        <h3 className="text-sm font-medium mb-3 text-gray-400">POPULAR SPORTS</h3>
        <nav className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-700 group">
            <FootballIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
            <span className="text-white">Football</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-700 group">
            <BasketballIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
            <span className="text-white">Basketball</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-700 group">
            <TennisIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
            <span className="text-white">Tennis</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-700 group">
            <TargetIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" />
            <span className="text-white">Darts</span>
          </a>
        </nav>
      </div>

      <div className="bg-gray-700 h-px w-full"></div>

    </div>
  );
};

export default Sidebar;