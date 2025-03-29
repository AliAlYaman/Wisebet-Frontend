import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-500">Wisebet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
              Sports
            </Link>
            <Link to="/live" className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
              Live
            </Link>
            <Link to="/casino" className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
              Casino
            </Link>
            <Link to="/predictions" className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
              Predictions
            </Link>
          </nav>

          {/* Search and User Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link 
                to="/login" 
                className="px-3 py-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors cursor-pointer"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors cursor-pointer"
              >
                Register
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container px-4 py-3 mx-auto">
            <div className="flex items-center relative mb-4">
              {/* Mobile search input would go here */}
            </div>
            
            <nav className="space-y-1 pb-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sports
              </Link>
              <Link 
                to="/live" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live
              </Link>
              <Link 
                to="/casino" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Casino
              </Link>
              <Link 
                to="/promotions" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promotions
              </Link>
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;