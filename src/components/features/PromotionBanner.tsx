import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm inline-flex items-center justify-center";
  
  const variantStyles = {
    default: "bg-white hover:bg-gray-100 text-betting-dark",
    outline: "border border-white text-white hover:bg-white/10"
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const PromotionBanner: React.FC = () => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-betting/80 to-betting-dark/90 z-10"></div>
      <div 
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Welcome Bonus: 100% up to $500
            </h2>
            <p className="text-white/90 mb-6">
              Join WagerVerse today and get a 100% match on your first deposit. Plus, get 50 free spins on our featured slots.
            </p>
            <div className="flex gap-4">
              <Button>
                Claim Now
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;