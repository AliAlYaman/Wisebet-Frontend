import React from 'react';

interface IconProps {
  className?: string;
}

export const FootballIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM17 8L13.5 12.5L15 17L12 15L9 17L10.5 12.5L7 8L11.5 8.5L12 4L12.5 8.5L17 8Z" fill="currentColor"/>
    </svg>
  </div>
);

export const BasketballIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M4.93 4.93C7.64 2.21 11.69 1.76 14.89 3.5M4.93 19.07C2.21 16.36 1.76 12.31 3.5 9.11M19.07 19.07C16.36 21.79 12.31 22.24 9.11 20.5M19.07 4.93C21.79 7.64 22.24 11.69 20.5 14.89" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

export const TennisIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M18.5 5.5C14.5 9.5 14.5 14.5 18.5 18.5M5.5 5.5C9.5 9.5 9.5 14.5 5.5 18.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

export const BaseballIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 8C13.6 6.8 13 5.6 12 4.5M10 16C10.4 17.2 11 18.4 12 19.5M14 16C14.4 17.2 15 18.4 16 19.5M10 8C9.6 6.8 9 5.6 8 4.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

export const GolfIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 8V18M7 18H17M10 14C10 15.1 10.9 16 12 16C13.1 16 14 15.1 14 14" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);

export const BadgeCheckIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M9 12L11 14L15 10M12 3C7.58 3 4 6.58 4 11C4 15.42 7.58 19 12 19C16.42 19 20 15.42 20 11C20 6.58 16.42 3 12 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);

export const BikeIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="5" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="19" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 17L8 11H13L14.5 6H17M9 11L14 17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </div>
);

export const TrophyIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8 21H16M12 17V21M6 8V4H18V8M6 8C6 12.4 9 16 12 17M6 8H4C4 12.4 5 16 8 17M18 8C18 12.4 15 16 12 17M18 8H20C20 12.4 19 16 16 17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const PlusCircleIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M3 6H5H21M19 6V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V6M8 6V4C8 2.9 8.9 2 10 2H14C15.1 2 16 2.9 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const DollarSignIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2V22M17 5H9.5C7.01 5 5 7.01 5 9.5C5 11.99 7.01 14 9.5 14H14.5C16.99 14 19 16.01 19 18.5C19 20.99 16.99 23 14.5 23H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const MinusIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const FlameIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M8.5 14.5C7.5 15.5 7.5 17.5 8.5 18.5C9.5 19.5 11.5 19.5 12.5 18.5C13.5 17.5 15.5 17.5 16.5 18.5M12 2C8.5 6 7.5 11 11 14.5C13 16.5 15 18 16 20.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  </div>
);

export const ClockIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </div>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);