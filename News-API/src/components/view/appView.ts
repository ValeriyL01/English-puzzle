import News from './news/news';
import Sources from './sources/sources';
import { DataNews, DataSource } from '../../types';

export class AppView {
  public static drawNews(data: DataNews): void {
    const values = data?.articles ? data?.articles : [];
    News.draw(values);
  }

  public static drawSources(data: DataSource): void {
    const values = data?.sources ? data?.sources : [];
    Sources.draw(values);
  }
}

export default AppView;
