import './resultBlock.css';
import createElement from '../createElement';
import wordCollectionLevel1 from '../../../data/data/wordCollectionLevel1.json';

const resultBlock = createElement('div', 'result-block') as HTMLImageElement;
const imgUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/';
const img = wordCollectionLevel1.rounds[0].levelData.cutSrc;
const imgSrc = `${imgUrlBase}${img}`;

resultBlock.style.backgroundImage = `url(${imgSrc})`;

// создание 10 контейнеров для пазлов
function createPuzzleContainers(): HTMLElement[] {
  const puzzleContainers: HTMLElement[] = [];

  for (let i: number = 0; i <= 9; i += 1) {
    const puzzleContainer = createElement('div', 'result-block-puzzle-container');
    resultBlock?.append(puzzleContainer);
    puzzleContainers.push(puzzleContainer);
  }

  return puzzleContainers;
}
const puzzleContainers = createPuzzleContainers();
export { resultBlock, puzzleContainers };
