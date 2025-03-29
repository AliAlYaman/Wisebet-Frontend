import React from 'react';

// Simple utility function to merge class names
const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-700 bg-gray-800 text-white shadow-sm",
        className
      )}
      {...props}
    />
  )
);
CustomCard.displayName = "CustomCard";

const CustomCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CustomCardHeader.displayName = "CustomCardHeader";

const CustomCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
));
CustomCardTitle.displayName = "CustomCardTitle";

const CustomCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
CustomCardDescription.displayName = "CustomCardDescription";

const CustomCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CustomCardContent.displayName = "CustomCardContent";

const CustomCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CustomCardFooter.displayName = "CustomCardFooter";

export { 
  CustomCard, 
  CustomCardHeader, 
  CustomCardFooter, 
  CustomCardTitle, 
  CustomCardDescription, 
  CustomCardContent 
};