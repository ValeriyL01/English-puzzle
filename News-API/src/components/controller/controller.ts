import AppLoader from './appLoader';
import { DataSource, DataNews } from '../../types';

class AppController extends AppLoader {
  public getSources(callback: (data?: DataSource) => void): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  public getNews(e: Event, callback: (data?: DataNews) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer instanceof HTMLElement) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback,
            );
          }
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
