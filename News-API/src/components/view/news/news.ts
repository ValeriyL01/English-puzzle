import './news.css';
import { NewsApi } from '../../../types';

class News {
  public static draw(data: NewsApi[]): void {
    console.log(data);
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {
      if (newsItemTemp) {
        const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

        if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

        const newsMetaPhoto = newsClone.querySelector('.news__meta-photo');
        if (newsMetaPhoto instanceof HTMLElement) {
          newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'assets/news.jpg'})`;
        }
        const newsMetaAutor = newsClone.querySelector('.news__meta-author');
        if (newsMetaAutor instanceof HTMLElement) {
          newsMetaAutor.textContent = item.author || item.source.name;
        }
        const newsMetaDate = newsClone.querySelector('.news__meta-date');
        if (newsMetaDate instanceof HTMLElement) {
          newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
        }

        const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
        if (newsDescriptionTitle instanceof HTMLElement) {
          newsDescriptionTitle.textContent = item.title;
        }
        const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
        if (newsDescriptionSource instanceof HTMLElement) {
          newsDescriptionSource.textContent = item.source.name;
        }
        const newsDescriptionContent = newsClone.querySelector('.news__description-content');
        if (newsDescriptionContent instanceof HTMLElement) {
          newsDescriptionContent.textContent = item.description;
        }
        const newsReadMore = newsClone.querySelector('.news__read-more a');
        if (newsReadMore instanceof HTMLElement) {
          newsReadMore.setAttribute('href', item.urlToImage);
        }

        fragment.append(newsClone);
      }
    });

    const newses = document.querySelector('.news');
    if (newses instanceof HTMLElement) {
      newses.innerHTML = '';
    }
    const newsFragment = document.querySelector('.news');
    if (newsFragment instanceof HTMLElement) {
      newsFragment.appendChild(fragment);
    }
  }
}

export default News;
