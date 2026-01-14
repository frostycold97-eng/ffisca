import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleView from './pages/ArticleView';
import ResearchAssistant from './components/ResearchAssistant';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleArticleClick = (id: string) => {
    setActiveArticleId(id);
    handleNavigate(ViewState.ARTICLE);
  };

  const renderContent = () => {
    switch (view) {
      case ViewState.HOME:
        return <Home onArticleClick={handleArticleClick} />;
      case ViewState.ARTICLE:
        return <ArticleView onBack={() => handleNavigate(ViewState.HOME)} />;
      case ViewState.RESEARCH:
        return (
          <div className="max-w-6xl mx-auto px-6 py-12 min-h-[60vh]">
            <ResearchAssistant />
          </div>
        );
      default:
        return <Home onArticleClick={handleArticleClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-paper font-sans text-brand-black selection:bg-brand-black selection:text-white">
      <Header currentView={view} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;