import './sources.css';
import { SourcesAPI } from '../../../types';

class Sources {
  public static draw(data: SourcesAPI[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: Element | null = document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      if (sourceItemTemp instanceof HTMLTemplateElement) {
        const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;
        const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
        if (sourceItemName instanceof HTMLElement) {
          sourceItemName.textContent = item.name;
        }
        const sourseItem: Element | null = sourceClone.querySelector('.source__item');
        if (sourseItem instanceof HTMLElement) {
          sourseItem.setAttribute('data-source-id', item.id);
        }

        fragment.append(sourceClone);
      }
    });

    const sources = document.querySelector('.sources');
    if (sources instanceof HTMLElement) {
      sources.append(fragment);
    }
  }
}

export default Sources;
