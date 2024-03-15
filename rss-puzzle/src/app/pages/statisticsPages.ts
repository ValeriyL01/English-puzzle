import './statisticsPages.css';
import createElement from '../components/createElement';

const statisticsPages = createElement('div', 'statistics-pages');
const statisticsPagesContainer = createElement('div', 'statistics-pages-container');
const continueButtonStatisticsPages = createElement(
  'button',
  'continue-button-statistic',
  'Continue',
) as HTMLButtonElement;
const autocompleteWrapper = createElement('div', 'autocomplete-wrapper');
const knowsWrapper = createElement('div', 'knows-wrapper');
const autocompleteTitle = createElement('h2', 'autocomplete-Title', 'Auto-Complete');
const knowTitle = createElement('h2', 'know-Title', 'I know');
statisticsPages.append(statisticsPagesContainer);
statisticsPagesContainer.append(autocompleteWrapper, knowsWrapper, continueButtonStatisticsPages);
autocompleteWrapper.append(autocompleteTitle);
knowsWrapper.append(knowTitle);

function createArrAutoCompleteSentence(arrAutoCompleteSentences: string[], entences: string): void {
  arrAutoCompleteSentences.push(entences);
}

function addAutoCompleteSentences(
  arrAutoCompleteSentences: string[],
  arrAutoCompleteSentencesElements: HTMLElement[],
): void {
  arrAutoCompleteSentences.forEach((sentence: string) => {
    const sentenceBlock = createElement('div', 'sentence');
    arrAutoCompleteSentencesElements.push(sentenceBlock);
    autocompleteWrapper.append(sentenceBlock);
    sentenceBlock.innerText = sentence;
  });
  autocompleteTitle.innerText = `Auto-Complete (${arrAutoCompleteSentences.length})`;
}
function addKnowSentences(
  arrAllSentences: string[],
  arrAutoCompleteSentences: string[],
  arrKnowSentences: string[],
  arrKnowSentencesSentencesElements: HTMLElement[],
): void {
  arrAllSentences.forEach((sentence) => {
    if (!arrAutoCompleteSentences.includes(sentence)) {
      arrKnowSentences.push(sentence);
    }
  });
  arrKnowSentences.forEach((sentence: string) => {
    const sentenceBlock = createElement('div', 'sentence');
    arrKnowSentencesSentencesElements.push(sentenceBlock);
    knowsWrapper.append(sentenceBlock);
    sentenceBlock.innerText = sentence;
  });
  knowTitle.innerText = `I know (${arrKnowSentences.length})`;
}

export {
  statisticsPages,
  continueButtonStatisticsPages,
  autocompleteWrapper,
  knowsWrapper,
  autocompleteTitle,
  knowTitle,
  createArrAutoCompleteSentence,
  addAutoCompleteSentences,
  addKnowSentences,
};
