import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '1a5da4b8655a4d0e8b7a9d240ac3c390', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
