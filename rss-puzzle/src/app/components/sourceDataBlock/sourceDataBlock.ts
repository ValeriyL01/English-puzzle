import './sourseDataBlock.css';
import createElement from '../createElement';
import { puzzleContainers } from '../resultBlock/resultBlock';
import getNextTextExample from '../getData';
import { continueButton } from '../gameButtonsBlock/gameButtonsBlock';

interface PuzzleContainerData {
  wordCards: HTMLElement[];
  currentPuzzleContainerIndex: number;
}
const puzzleContainerData: PuzzleContainerData = {
  wordCards: [],
  currentPuzzleContainerIndex: 0,
};
const sourseData = createElement('div', 'sourse-data');

continueButton.addEventListener('click', () => {
  // Увеличиваем currentPuzzleContainerIndex до 9 и возвращаем на 0 после достижения 9
  if (puzzleContainerData.currentPuzzleContainerIndex < 9) {
    puzzleContainerData.currentPuzzleContainerIndex += 1;
  } else {
    puzzleContainerData.currentPuzzleContainerIndex = 0;
  }
  continueButton.disabled = true;
});

function addClickListenerCard(wordCard: HTMLElement): void {
  const card = wordCard;
  card.addEventListener('click', () => {
    if (card.dataset.clicked === 'false') {
      puzzleContainers[puzzleContainerData.currentPuzzleContainerIndex].append(card);
      card.dataset.clicked = 'true';
    } else {
      sourseData.prepend(card);
      card.dataset.clicked = 'false';
    }
  });
}

// создание блоков со словами в рандомном порядке
function createWordsBlock(sentence: string): void {
  const words = sentence.split(' ');
  const widthParent = 768;
  const wordLengthInit = words.length;
  const averageWidth = widthParent / wordLengthInit;
  puzzleContainerData.wordCards = [];
  words
    .sort(() => Math.random() - 0.5)
    .forEach((word) => {
      const wordCard = createElement('div', 'word-card', word);
      puzzleContainerData.wordCards.push(wordCard);
      wordCard.dataset.clicked = 'false';
      sourseData.append(wordCard);
      wordCard.style.width = `${averageWidth}px`;
      const wordWidth = word.length * 10;
      const fontSize = wordWidth > widthParent / wordLengthInit ? '14px' : '18px';
      wordCard.style.fontSize = fontSize;

      addClickListenerCard(wordCard);
    });
}
const { textExample } = getNextTextExample();
createWordsBlock(textExample);
export { sourseData, createWordsBlock, puzzleContainerData };
