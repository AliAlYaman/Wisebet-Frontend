import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/common/CustomButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-xl text-gray-900 mb-6">Oops! This page doesn't exist</p>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <CustomButton className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <div className="mr-2 h-4 w-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            Back to Home
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;