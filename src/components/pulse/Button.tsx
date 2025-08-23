import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  type = 'button', 
  className = '' 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-xl bg-black/20 backdrop-blur-xs border-2 border-yellow-400 shadow-xl px-6 py-3 text-black font-bold font-family-fredoka text-shadow-[1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white] hover:bg-black/30 transition-all ${className}`}
    >
      {children}
    </button>
  );
}