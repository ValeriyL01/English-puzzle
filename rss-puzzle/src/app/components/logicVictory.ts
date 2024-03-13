import { getNextDataExample } from './getData';
import { resultBlock, puzzleContainers } from './resultBlock/resultBlock';
import { continueButton, checkButton, autoCompleteButton } from './gameButtonsBlock/gameButtonsBlock';
import { createWordsBlock, puzzleData } from './sourceDataBlock/sourceDataBlock';
import { checkWordOrder } from './checkButtonLogic';
import { translationSentence } from './translationSentence/translationSentence';
import { translationHintButton, audioHintButton } from './hintButtonBlock/hintButtonBlock';
import { audioSentence } from './audioSentence/audioSentence';

interface CurrentLineDataWithPuzzles {
  textString: string;
  audio: string;
}

const quantityPuzzleContainers = 10;

const currentLineDataWithPuzzles: CurrentLineDataWithPuzzles = {
  textString: 'The students agree they have too much homework',
  audio: 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/files/01_0001_example.mp3',
};
// перевод первой строчки
translationSentence.innerText = 'Студенты согласны, что у них слишком много домашней работы';

function clearPuzzleContainers(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    while (puzzleContainer.firstChild) {
      puzzleContainer.removeChild(puzzleContainer.firstChild);
    }
  });
}
function showPuzzleContainers(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.style.background = '#dde6eb';
    puzzleContainerCopy.style.opacity = '1';
    puzzleContainerCopy.style.pointerEvents = 'auto';
  });
}
function changePuzzleContainerIndex(): void {
  if (puzzleData.currentPuzzleContainerIndex < 9) {
    puzzleData.currentPuzzleContainerIndex += 1;
  } else {
    puzzleData.currentPuzzleContainerIndex = 0;
    clearPuzzleContainers();
    showPuzzleContainers();
  }
}
function disableButtons(): void {
  continueButton.classList.remove('continue-button--active');
  checkButton.classList.remove('continue-button--none');
  if (translationHintButton.classList.contains('translation-hint-button--off')) {
    translationSentence.classList.add('translation-sentence--off');
  }
  continueButton.disabled = true;
  autoCompleteButton.disabled = false;
}
function updateData(audioSrc: string, textExample: string, textExampleTranslate: string, imgSrc: string): void {
  currentLineDataWithPuzzles.audio = audioSrc;
  currentLineDataWithPuzzles.textString = textExample;
  translationSentence.innerText = textExampleTranslate;
  resultBlock.style.backgroundImage = `url(${imgSrc})`;
  disableButtons();
}
continueButton.addEventListener('click', () => {
  changePuzzleContainerIndex();

  const { textExample, imgSrc, textExampleTranslate, audioSrc } = getNextDataExample();
  updateData(audioSrc, textExample, textExampleTranslate, imgSrc);
  createWordsBlock(currentLineDataWithPuzzles.textString);
});
function showImagePuzzle(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.style.background = 'transparent';
    puzzleContainerCopy.style.opacity = '0';
  });
}
function getTextStringPuzzle(wordCards: HTMLCollection): string {
  const textArr: string[] = [];
  const wordCardArray: HTMLElement[] = Array.from(wordCards) as HTMLElement[];
  wordCardArray.forEach((wordCard: HTMLElement) => {
    textArr.push(wordCard.innerText);
  });
  return textArr.join(' ');
}
function comparisonString(textData?: string): void {
  const { children }: { children: HTMLCollection } = puzzleContainers[puzzleData.currentPuzzleContainerIndex];
  const textString = getTextStringPuzzle(children);
  checkWordOrder(textData, children);
  if (textData === textString) {
    continueButton.classList.add('continue-button--active');
    checkButton.classList.add('continue-button--none');
    translationSentence.classList.remove('translation-sentence--off');
    audioSentence.classList.remove('audio-sentence--off');
    translationHintButton.disabled = true;
    audioHintButton.disabled = true;
    continueButton.disabled = false;
    checkButton.disabled = true;
    autoCompleteButton.disabled = true;
    puzzleContainers[puzzleData.currentPuzzleContainerIndex].style.opacity = '0.6';
    puzzleContainers[puzzleData.currentPuzzleContainerIndex].style.pointerEvents = 'none';
    puzzleData.counterGuessedLines += 1;
    if (puzzleData.counterGuessedLines >= quantityPuzzleContainers) {
      showImagePuzzle();
      puzzleData.counterGuessedLines = 0;
    }
  }
}

function observeResultBlockChanges(): void {
  const observer = new MutationObserver(() => {
    comparisonString(currentLineDataWithPuzzles.textString);
  });

  const config: MutationObserverInit = {
    childList: true,
    subtree: true,
  };

  observer.observe(resultBlock, config);
}

export {
  observeResultBlockChanges,
  currentLineDataWithPuzzles,
  updateData,
  clearPuzzleContainers,
  showPuzzleContainers,
};
