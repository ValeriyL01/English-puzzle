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
