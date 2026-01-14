import React from 'react';
import Button from '../components/Button';

interface ArticleViewProps {
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ onBack }) => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
      <div className="mb-8">
        <Button variant="text" onClick={onBack}>&larr; Return to Journal</Button>
      </div>

      <header className="mb-12">
        <div className="flex items-center gap-4 text-xs font-sans text-brand-grey uppercase tracking-widest mb-6">
          <span>Risk Management</span>
          <span className="w-px h-3 bg-brand-border"></span>
          <span>Oct 12, 2023</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl text-brand-black leading-tight mb-8">
          The Asymmetry of Risk in Modern Portfolios
        </h1>
        <div className="flex items-center gap-4 pt-8 border-t border-brand-border">
          <div className="w-10 h-10 bg-brand-border rounded-full flex items-center justify-center font-serif text-brand-grey italic">
            A
          </div>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black">Arthur Sterling</p>
            <p className="font-sans text-[10px] text-brand-grey uppercase tracking-wider">Senior Analyst</p>
          </div>
        </div>
      </header>

      <div className="prose prose-lg prose-slate font-serif text-brand-charcoal">
        <p className="lead text-xl md:text-2xl leading-relaxed mb-8 text-brand-black">
          True diversification is not merely owning different asset classes; it is owning assets that behave differently under stress. In the pursuit of yield, modern portfolios have inadvertently correlated their tail risks.
        </p>
        
        <p className="mb-6 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>

        <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-black mt-12 mb-6">
          The Liquidity Illusion
        </h2>

        <p className="mb-6 leading-loose">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <blockquote className="border-l-4 border-brand-black pl-6 italic text-brand-grey my-12 text-xl">
          "When correlation approaches one, the only hedge is cash, and the only strategy is patience."
        </blockquote>

        <p className="mb-6 leading-loose">
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

         <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-black mt-12 mb-6">
          Structural Implications
        </h2>

        <p className="mb-6 leading-loose">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>
      </div>
      
      <div className="mt-20 pt-12 border-t border-brand-border flex justify-between items-center">
         <span className="font-sans text-xs text-brand-grey uppercase tracking-widest">Share this analysis</span>
         <div className="flex gap-4">
             {/* Social placeholders */}
             <div className="w-4 h-4 bg-brand-grey/20"></div>
             <div className="w-4 h-4 bg-brand-grey/20"></div>
             <div className="w-4 h-4 bg-brand-grey/20"></div>
         </div>
      </div>
    </article>
  );
};

export default ArticleView;