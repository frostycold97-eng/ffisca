import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onClick: (id: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <article 
      className="group cursor-pointer py-8 border-b border-brand-border last:border-0"
      onClick={() => onClick(article.id)}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-xs font-sans text-brand-grey uppercase tracking-widest">
          <span>{article.category}</span>
          <span className="w-px h-3 bg-brand-border"></span>
          <span>{article.date}</span>
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl text-brand-black leading-tight group-hover:text-brand-charcoal transition-colors">
          {article.title}
        </h2>
        
        <p className="font-sans text-brand-grey leading-relaxed max-w-2xl text-sm md:text-base">
          {article.excerpt}
        </p>

        <div className="mt-2 text-xs font-sans text-brand-black font-medium group-hover:underline underline-offset-4 decoration-brand-border">
          Read Analysis &rarr;
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;