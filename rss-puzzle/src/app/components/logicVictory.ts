import { getNextDataExample } from './getData';
import { resultBlock, puzzleContainers } from './resultBlock/resultBlock';
import { continueButton, checkButton, autoCompleteButton, resultsButton } from './gameButtonsBlock/gameButtonsBlock';
import { createWordsBlock, puzzleData } from './sourceDataBlock/sourceDataBlock';
import { checkWordOrder } from './checkButtonLogic';
import { translationSentence } from './translationSentence/translationSentence';
import { translationHintButton, audioHintButton } from './hintButtonBlock/hintButtonBlock';
import { audioSentence } from './audioSentence/audioSentence';
import informationPaining from './informationPaining/inforvationPaining';
import {
  continueButtonStatisticsPages,
  createArrAutoCompleteSentence,
  addAutoCompleteSentences,
  addKnowSentences,
} from '../pages/statisticsPages';

interface CurrentLineDataWithPuzzles {
  textString: string;
  audio: string;
}
let autoCompleteSentences: string[] = [];
const autoCompleteSentencesElements: HTMLElement[] = [];
const knowSentencesSentencesElements: HTMLElement[] = [];
let arrSentences: string[] = [];
let knowSentences: string[] = [];
let arrAutoCompleteAudio: string[] = [];
let arrAudioSrc: string[] = [];
let arrKnowAudioSrc: string[] = [];
const quantityPuzzleContainers = 10;
let isLineGuessed = false;
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
  informationPaining.classList.remove('information-paining--active');
  resultsButton.classList.remove('results-button--active');
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
function removeElementsStatisticsPage(): void {
  autoCompleteSentences = [];
  arrSentences = [];
  knowSentences = [];
  arrAutoCompleteAudio = [];
  arrAudioSrc = [];
  arrKnowAudioSrc = [];
  autoCompleteSentencesElements.forEach((element) => {
    element.remove();
  });
  knowSentencesSentencesElements.forEach((element) => {
    element.remove();
  });
}
continueButton.addEventListener('click', () => {
  changePuzzleContainerIndex();
  if (informationPaining.classList.contains('information-paining--active')) {
    removeElementsStatisticsPage();
  }
  const { textExample, imgSrc, textExampleTranslate, audioSrc, imgAuthor, imgName, imgYear } = getNextDataExample();

  updateData(audioSrc, textExample, textExampleTranslate, imgSrc);
  createWordsBlock(currentLineDataWithPuzzles.textString);
  informationPaining.innerText = `${imgAuthor} — ${imgName} (${imgYear} year)`;
  isLineGuessed = false;
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.classList.remove('result-block-puzzle-container-active');
  });
});

continueButtonStatisticsPages.addEventListener('click', () => {
  removeElementsStatisticsPage();
  changePuzzleContainerIndex();

  const { textExample, imgSrc, textExampleTranslate, audioSrc, imgAuthor, imgName, imgYear } = getNextDataExample();

  updateData(audioSrc, textExample, textExampleTranslate, imgSrc);
  createWordsBlock(currentLineDataWithPuzzles.textString);
  informationPaining.innerText = `${imgAuthor} — ${imgName} (${imgYear} year)`;
  isLineGuessed = false;
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.classList.remove('result-block-puzzle-container-active');
  });
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
  console.log(textData);
  checkWordOrder(textData, children);
  if (textData === textString && !isLineGuessed) {
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
    isLineGuessed = true;
    arrSentences.push(currentLineDataWithPuzzles.textString);
    arrAudioSrc.push(currentLineDataWithPuzzles.audio);
    if (puzzleData.counterGuessedLines >= quantityPuzzleContainers) {
      showImagePuzzle();
      puzzleData.counterGuessedLines = 0;
      informationPaining.classList.add('information-paining--active');
      resultsButton.classList.add('results-button--active');
      puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
        const puzzleContainerCopy = puzzleContainer;
        puzzleContainerCopy.classList.add('result-block-puzzle-container-active');
      });
    }
  }
}

autoCompleteButton.addEventListener('click', () => {
  createArrAutoCompleteSentence(
    autoCompleteSentences,
    arrAutoCompleteAudio,
    currentLineDataWithPuzzles.textString,
    currentLineDataWithPuzzles.audio,
  );
});

resultsButton.addEventListener('click', () => {
  addAutoCompleteSentences(autoCompleteSentences, autoCompleteSentencesElements, arrAutoCompleteAudio);
  addKnowSentences(
    arrSentences,
    autoCompleteSentences,
    knowSentences,
    knowSentencesSentencesElements,
    arrAudioSrc,
    arrAutoCompleteAudio,
    arrKnowAudioSrc,
  );
});
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
