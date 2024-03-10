import './sourseDataBlock.css';
import { PuzzleData } from '../../types/types';
import createElement from '../createElement';
import { puzzleContainers } from '../resultBlock/resultBlock';
import getNextTextExample from '../getData';
import { continueButton } from '../gameButtonsBlock/gameButtonsBlock';
import { drag, allowDrop, drop } from '../dragAndDrop';

const puzzleData: PuzzleData = {
  wordCards: [],
  currentPuzzleContainerIndex: 0,
};
const sourseData = createElement('div', 'sourse-data');

continueButton.addEventListener('click', () => {
  // Увеличиваем currentPuzzleContainerIndex до 9 и возвращаем на 0 после достижения 9
  if (puzzleData.currentPuzzleContainerIndex < 9) {
    puzzleData.currentPuzzleContainerIndex += 1;
  } else {
    puzzleData.currentPuzzleContainerIndex = 0;
  }
  continueButton.disabled = true;
  puzzleContainers[puzzleData.currentPuzzleContainerIndex].ondragover = allowDrop;
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

const { textExample } = getNextTextExample();
createWordsBlock(textExample);
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
