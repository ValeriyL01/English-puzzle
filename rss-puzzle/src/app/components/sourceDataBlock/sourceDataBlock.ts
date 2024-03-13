import './sourseDataBlock.css';
import { PuzzleData } from '../../types/types';
import createElement from '../createElement';
import { puzzleContainers } from '../resultBlock/resultBlock';
import { continueButton } from '../gameButtonsBlock/gameButtonsBlock';
import { drag, allowDrop, drop } from '../dragAndDrop';

const puzzleData: PuzzleData = {
  wordCards: [],
  currentPuzzleContainerIndex: 0,
  counterGuessedLines: 0,
};
const sourseData = createElement('div', 'sourse-data');

continueButton.addEventListener('click', () => {
  if (puzzleData.currentPuzzleContainerIndex < 9) {
    puzzleContainers[puzzleData.currentPuzzleContainerIndex + 1].ondragover = allowDrop;
  }
});

function addClickListenerCard(wordCard: HTMLElement): void {
  const card = wordCard;
  card.addEventListener('click', () => {
    if (card.dataset.clicked === 'false') {
      puzzleContainers[puzzleData.currentPuzzleContainerIndex].append(card);
      card.dataset.clicked = 'true';
    } else {
      sourseData.prepend(card);
      card.dataset.clicked = 'false';
    }
  });
}

// создание блоков со словами в рандомном порядке
let counterWordCard = 0;
let currentPuzzleContainer: HTMLElement;
function createWordsBlock(sentence: string): void {
  while (sourseData.firstChild) {
    sourseData.removeChild(sourseData.firstChild);
  }
  const words = sentence.split(' ');
  const widthParent = 768;
  const wordLengthInit = words.length;
  const averageWidth = widthParent / wordLengthInit;
  puzzleData.wordCards = [];

  words
    .sort(() => Math.random() - 0.5)
    .forEach((word) => {
      counterWordCard += 1;
      const wordCard = createElement('div', 'word-card', word, {
        id: `card${counterWordCard}`,
      });
      puzzleData.wordCards.push(wordCard);
      wordCard.dataset.clicked = 'false';
      sourseData.append(wordCard);
      wordCard.style.width = `${averageWidth}px`;
      const wordWidth = word.length * 10;
      const fontSize = wordWidth > widthParent / wordLengthInit ? '14px' : '18px';
      wordCard.style.fontSize = fontSize;
      wordCard.setAttribute('draggable', 'true');

      addClickListenerCard(wordCard);
    });
  puzzleData.wordCards.forEach((element) => {
    const card = element;
    card.ondragstart = drag;
  });
  currentPuzzleContainer = puzzleContainers[puzzleData.currentPuzzleContainerIndex];
  currentPuzzleContainer.addEventListener('drop', (event: DragEvent) => {
    drop(event, puzzleData, sourseData, currentPuzzleContainer);
  });
}

puzzleData.wordCards.forEach((element) => {
  const card = element;
  card.ondragstart = drag;
});
puzzleContainers[puzzleData.currentPuzzleContainerIndex].ondragover = allowDrop;
sourseData.ondragover = allowDrop;

sourseData.addEventListener('drop', (event: DragEvent) => {
  drop(event, puzzleData, sourseData, currentPuzzleContainer);
});
export { sourseData, createWordsBlock, puzzleData };
