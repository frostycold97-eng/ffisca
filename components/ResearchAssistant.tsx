import React, { useState } from 'react';
import Button from './Button';
import { defineConcept } from '../services/geminiService';

const ResearchAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleResearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);
    
    const definition = await defineConcept(query);
    
    setResult(definition);
    setLoading(false);
  };

  return (
    <div className="bg-brand-light p-8 md:p-12 border border-brand-border h-full">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-2xl text-brand-black mb-2">Fundamental Research</h2>
        <p className="font-sans text-sm text-brand-grey mb-8">
          Define financial mechanisms and economic principles without the noise.
        </p>

        <form onSubmit={handleResearch} className="space-y-4">
          <div className="relative">
            <label htmlFor="query" className="sr-only">Search term</label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g., Liquidity Trap, EBITDA, Bretton Woods"
              className="w-full bg-white border border-brand-border p-4 font-serif text-lg text-brand-black focus:outline-none focus:border-brand-black placeholder:text-brand-border transition-colors"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={loading || !query.trim()}>
              {loading ? 'Analyzing...' : 'Define Concept'}
            </Button>
          </div>
        </form>

        {result && (
          <div className="mt-12 animate-fade-in">
            <span className="block font-sans text-xs uppercase tracking-widest text-brand-grey mb-4">
              Definition
            </span>
            <div className="prose prose-slate">
              <p className="font-serif text-xl leading-loose text-brand-charcoal border-l-2 border-brand-black pl-6">
                {result}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchAssistant;