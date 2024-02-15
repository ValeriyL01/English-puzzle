export interface NewsApi {
  author: string;
  content: string;
  description: string;
  publishedAt: string;

  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
export interface SourcesAPI {
  id: string;
  name: string;
}
export interface DataNews {
  status: string;
  totalResults: number;
  articles: [
    {
      source: {
        id: string;
        name: string;
        description: string;
        urlToImage: string;
        category: string;
        language: string;
        country: string;
        author: string;
      };
      author: string;
      content: string;
      description: string;
      publishedAt: string;
      status: string;
      title: string;
      url: string;
      urlToImage: string;
      id: string;
      name: string;
      language: string;
      country: string;
      category: string;
      totalResults: number;
    },
  ];
}
export interface DataSource {
  status: string;
  sources: SourceItem[];
}

export interface SourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
export interface Options {
  sources?: string;
  apiKey?: string;
}
export type Callback<T = void> = (data: T) => void;
