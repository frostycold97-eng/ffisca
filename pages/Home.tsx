import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const SAMPLE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The Asymmetry of Risk in Modern Portfolios',
    excerpt: 'Examining why traditional diversification strategies fail during liquidity crises, and how institutional capital preserves value when correlations approach one.',
    category: 'Risk Management',
    readTime: '12 min read',
    date: 'OCT 12, 2023'
  },
  {
    id: '2',
    title: 'Yield Curves as Economic Thermometers',
    excerpt: 'A historical analysis of inversion signals. Why the bond market often whispers what the equity market refuses to hear until it is too late.',
    category: 'Macroeconomics',
    readTime: '8 min read',
    date: 'SEP 28, 2023'
  },
  {
    id: '3',
    title: 'Value Investing in an Algorithmic Age',
    excerpt: 'Does fundamental analysis still hold weight when 80% of daily volume is machine-driven? We return to Graham and Dodd to find the signal in the noise.',
    category: 'Market Structure',
    readTime: '15 min read',
    date: 'SEP 14, 2023'
  },
  {
    id: '4',
    title: 'Currency Debasement: A Silent Tax',
    excerpt: 'Understanding the mechanics of fiat expansion and its long-term effects on purchasing power parity across G7 nations.',
    category: 'Monetary Policy',
    readTime: '10 min read',
    date: 'AUG 30, 2023'
  }
];

interface HomeProps {
  onArticleClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onArticleClick }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="mb-16 md:mb-24 border-b border-brand-black pb-8">
        <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black mb-4">
          Latest Issue
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-brand-black leading-tight max-w-4xl">
          Navigating the shift from zero-interest rate policy to structural inflation.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-8">
            {SAMPLE_ARTICLES.map(article => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onClick={onArticleClick} 
              />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 lg:pl-12 lg:border-l lg:border-brand-border">
          <div className="sticky top-24">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black mb-6">
              Editors' Selection
            </h3>
            <ul className="space-y-6">
              <li className="group cursor-pointer">
                <h4 className="font-serif text-lg text-brand-charcoal group-hover:text-brand-black leading-snug">
                  Capital Allocation in a high-rate environment
                </h4>
                <span className="block mt-2 font-sans text-[10px] text-brand-grey uppercase">
                  Corporate Finance
                </span>
              </li>
              <li className="group cursor-pointer">
                <h4 className="font-serif text-lg text-brand-charcoal group-hover:text-brand-black leading-snug">
                  The psychological burden of drawdowns
                </h4>
                <span className="block mt-2 font-sans text-[10px] text-brand-grey uppercase">
                  Behavioral Finance
                </span>
              </li>
              <li className="group cursor-pointer">
                <h4 className="font-serif text-lg text-brand-charcoal group-hover:text-brand-black leading-snug">
                  Understanding Fixed Income Derivatives
                </h4>
                <span className="block mt-2 font-sans text-[10px] text-brand-grey uppercase">
                  Technical Series
                </span>
              </li>
            </ul>

            <div className="mt-12 pt-12 border-t border-brand-border">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-black mb-4">
                Newsletter
              </h3>
              <p className="font-serif text-brand-grey italic mb-4">
                "The only market update that lowers your blood pressure."
              </p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent border-b border-brand-grey py-2 font-sans text-sm focus:outline-none focus:border-brand-black"
                />
                <button className="text-left font-sans text-xs font-bold uppercase tracking-widest text-brand-black mt-2 hover:opacity-70">
                  Subscribe &rarr;
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;