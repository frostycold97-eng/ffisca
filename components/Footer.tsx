import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-paper py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="font-serif text-lg text-brand-black">Fiscal Foundry</h3>
          <p className="font-sans text-xs text-brand-grey mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="font-sans text-xs text-brand-grey hover:text-brand-black uppercase tracking-wider">Privacy</a>
          <a href="#" className="font-sans text-xs text-brand-grey hover:text-brand-black uppercase tracking-wider">Terms</a>
          <a href="#" className="font-sans text-xs text-brand-grey hover:text-brand-black uppercase tracking-wider">RSS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;