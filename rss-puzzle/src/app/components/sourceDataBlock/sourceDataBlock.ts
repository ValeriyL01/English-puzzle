import './sourseDataBlock.css';
import createElement from '../createElement';
import { puzzleContainers } from '../resultBlock/resultBlock';
import getNextTextExample from '../getData';
import { continueButton } from '../gameButtonsBlock/gameButtonsBlock';

let currentPuzzleContainerIndex = 0;
const sourseData = createElement('div', 'sourse-data');

continueButton.addEventListener('click', () => {
  // Увеличиваем currentPuzzleContainerIndex до 9 и возвращаем на 0 после достижения 9
  if (currentPuzzleContainerIndex < 9) {
    currentPuzzleContainerIndex += 1;
  } else {
    currentPuzzleContainerIndex = 0;
  }
  continueButton.disabled = true;
});

function addClickListenerCard(wordCard: HTMLElement): void {
  const card = wordCard;
  card.addEventListener('click', () => {
    if (card.dataset.clicked === 'false') {
      puzzleContainers[currentPuzzleContainerIndex].append(card);
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

  words
    .sort(() => Math.random() - 0.5)
    .forEach((word) => {
      const wordCard = createElement('div', 'word-card', word);
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
export { sourseData, createWordsBlock };
