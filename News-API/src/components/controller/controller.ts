import AppLoader from './appLoader';
import { DataSource, DataNews, Endpoints } from '../../types';

class AppController extends AppLoader {
  public getSources(callback: (data?: DataSource) => void): void {
    super.getResp(
      {
        endpoint: Endpoints.sources,
      },
      callback,
    );
  }

  public getNews(e: Event, callback: (data?: DataNews) => void): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string | null = target.getAttribute('data-source-id');
        if (newsContainer instanceof HTMLElement) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            if (sourceId !== null) {
              newsContainer.setAttribute('data-source', sourceId);
              super.getResp(
                {
                  endpoint: Endpoints.everything,
                  options: {
                    sources: sourceId,
                  },
                },

                callback,
              );
            }
          }
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
