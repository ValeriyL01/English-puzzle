import { checkButton } from './gameButtonsBlock/gameButtonsBlock';

let matchedWords: string[] = [];
let matchedWordsContainers: HTMLElement[] = [];
let noMatchedWords: string[] = [];
let noMatchedContainers: HTMLElement[] = [];

export function checkWordOrder(textData?: string, wordCards?: HTMLCollection): void {
  if (!textData || !wordCards) {
    return;
  }
  const textArr: string[] = [];
  const wordCardsArray: HTMLElement[] = Array.from(wordCards) as HTMLElement[];
  wordCardsArray.forEach((wordCard: HTMLElement) => {
    textArr.push(wordCard.innerText);
  });

  const textString = textArr.join(' ');
  const wordsData: string[] = textData.split(' ');
  const wordsString: string[] = textString.split(' ');

  if (wordsData.length !== wordsString.length) {
    checkButton.disabled = true; // если пазлов не хватает  то заблокировать  кнопку check
    noMatchedContainers.forEach((wordCard) => {
      wordCard.classList.remove('word-card--nopassed');
    });
    matchedWordsContainers.forEach((wordCard) => {
      wordCard.classList.remove('word-card--passed');
    });
    matchedWords = [];
    matchedWordsContainers = [];
    noMatchedWords = [];
    noMatchedContainers = [];
    return;
  }
  checkButton.disabled = false; // если все пазлы в строчке то активировать кнопку check
  wordsData.forEach((word, index) => {
    if (word === wordsString[index]) {
      matchedWords.push(word);
      matchedWordsContainers.push(wordCardsArray[index]);
    } else {
      noMatchedWords.push(word);
      noMatchedContainers.push(wordCardsArray[index]);
    }
  });
}

function addClassWordCard(): void {
  noMatchedContainers.forEach((wordCard) => {
    wordCard.classList.add('word-card--nopassed');
  });
  matchedWordsContainers.forEach((wordCard) => {
    wordCard.classList.add('word-card--passed');
  });
}

checkButton.addEventListener('click', addClassWordCard);
