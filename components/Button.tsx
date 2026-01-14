import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-sans text-sm tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-black text-white hover:bg-brand-charcoal px-6 py-3 border border-brand-black",
    secondary: "bg-transparent text-brand-black border border-brand-border hover:border-brand-black px-6 py-3",
    text: "bg-transparent text-brand-grey hover:text-brand-black underline-offset-4 hover:underline px-0 py-2"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;