export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface SearchResult {
  term: string;
  definition: string;
}

export enum ViewState {
  HOME = 'HOME',
  ARTICLE = 'ARTICLE',
  RESEARCH = 'RESEARCH'
}