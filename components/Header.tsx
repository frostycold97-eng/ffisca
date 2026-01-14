import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-paper/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          onClick={() => onNavigate(ViewState.HOME)} 
          className="cursor-pointer group"
        >
          <h1 className="font-serif text-2xl text-brand-black tracking-tight group-hover:opacity-80 transition-opacity">
            Fiscal Foundry
          </h1>
          <p className="font-sans text-[10px] uppercase tracking-widest text-brand-grey mt-1">
            Built on Financial Fundamentals
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate(ViewState.HOME)}
            className={`font-sans text-sm ${currentView === ViewState.HOME ? 'text-brand-black font-medium' : 'text-brand-grey hover:text-brand-black'} transition-colors`}
          >
            Journal
          </button>
          <button 
             onClick={() => onNavigate(ViewState.RESEARCH)}
             className={`font-sans text-sm ${currentView === ViewState.RESEARCH ? 'text-brand-black font-medium' : 'text-brand-grey hover:text-brand-black'} transition-colors`}
          >
            Research
          </button>
          <button className="font-sans text-sm text-brand-grey hover:text-brand-black transition-colors">
            Manifesto
          </button>
        </nav>

        <div className="md:hidden">
           {/* Mobile menu placeholder - minimal icon */}
           <div className="space-y-1.5 cursor-pointer">
             <div className="w-6 h-px bg-brand-black"></div>
             <div className="w-6 h-px bg-brand-black"></div>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;