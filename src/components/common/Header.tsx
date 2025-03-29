import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-betting">WagerVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-betting transition-colors">
              Sports
            </Link>
            <Link to="/live" className="px-3 py-2 text-sm font-medium text-foreground hover:text-betting transition-colors">
              Live
            </Link>
            <Link to="/casino" className="px-3 py-2 text-sm font-medium text-foreground hover:text-betting transition-colors">
              Casino
            </Link>
            <Link to="/promotions" className="px-3 py-2 text-sm font-medium text-foreground hover:text-betting transition-colors">
              Promotions
            </Link>
          </nav>

          {/* Search and User Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              {/* <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-8 bg-secondary border-none w-40 lg:w-64 h-9 text-sm focus:outline-none"
              /> */}
            </div>
            
            {/* <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            
            <Button className="hidden md:flex bg-betting hover:bg-betting-dark text-betting-foreground">
              Register
            </Button>
            
            {/* Mobile menu button */}
            {/* <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )} */}
            {/* </Button>  */}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container px-4 py-3 mx-auto">
            <div className="flex items-center relative mb-4">
              {/* <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-8 bg-secondary border-none w-full h-9 text-sm focus:outline-none"
              /> */}
            </div>
            
            <nav className="space-y-1 pb-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sports
              </Link>
              <Link 
                to="/live" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live
              </Link>
              <Link 
                to="/casino" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Casino
              </Link>
              <Link 
                to="/promotions" 
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promotions
              </Link>
            </nav>
            
            <div className="flex space-x-2 pb-4">
              {/* <Button variant="outline" className="w-1/2">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="w-1/2 bg-betting hover:bg-betting-dark text-betting-foreground">
                Register
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
