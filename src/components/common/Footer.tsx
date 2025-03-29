import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-indigo-500">WagerVerse</span>
            </Link>
            <p className="text-gray-400 text-sm">
              The ultimate destination for sports betting and online casino games. Licensed and regulated.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Sports</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Football</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Basketball</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Tennis</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Hockey</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Baseball</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Casino</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/casino" className="text-sm text-gray-400 hover:text-white transition-colors">Slots</Link>
              </li>
              <li>
                <Link to="/casino" className="text-sm text-gray-400 hover:text-white transition-colors">Live Casino</Link>
              </li>
              <li>
                <Link to="/casino" className="text-sm text-gray-400 hover:text-white transition-colors">Table Games</Link>
              </li>
              <li>
                <Link to="/casino" className="text-sm text-gray-400 hover:text-white transition-colors">Game Shows</Link>
              </li>
              <li>
                <Link to="/casino" className="text-sm text-gray-400 hover:text-white transition-colors">Poker</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">Responsible Gambling</Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-xs text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} WagerVerse. All rights reserved. Gambling can be addictive, please play responsibly.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/help" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/help" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/help" className="text-xs text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;