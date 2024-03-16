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
const paining = createElement('div', 'paining') as HTMLImageElement;
const painingInformationStatistics = createElement('div', 'paining-information');
statisticsPages.append(statisticsPagesContainer);
statisticsPagesContainer.append(
  paining,
  painingInformationStatistics,
  autocompleteWrapper,
  knowsWrapper,
  continueButtonStatisticsPages,
);
autocompleteWrapper.append(autocompleteTitle);
knowsWrapper.append(knowTitle);

function createArrAutoCompleteSentence(
  arrAutoCompleteSentences: string[],
  arrAutoCompleteAudio: string[],
  entences: string,
  audio: string,
): void {
  arrAutoCompleteSentences.push(entences);
  arrAutoCompleteAudio.push(audio);
}

function addAutoCompleteSentences(
  arrAutoCompleteSentences: string[],
  arrAutoCompleteSentencesElements: HTMLElement[],
  arrAutoCompleteAudio: string[],
): void {
  arrAutoCompleteSentences.forEach((sentence: string, index: number) => {
    const sentenceBlock = createElement('div', 'sentence');
    const audioBlock = createElement('div', 'audio-sentence-statistics');
    arrAutoCompleteSentencesElements.push(sentenceBlock);
    autocompleteWrapper.append(sentenceBlock);
    sentenceBlock.innerText = sentence;
    sentenceBlock.append(audioBlock);

    const soundSentence = new Audio(arrAutoCompleteAudio[index]);
    audioBlock.addEventListener('click', () => {
      soundSentence.play();
    });
  });
  autocompleteTitle.innerText = `Auto-Complete (${arrAutoCompleteSentences.length})`;
}
function addKnowSentences(
  arrAllSentences: string[],
  arrAutoCompleteSentences: string[],
  arrKnowSentences: string[],
  arrKnowSentencesElements: HTMLElement[],
  arrAllAudioSrc: string[],
  arrAutoCompleteAudio: string[],
  arrKnowAudioSrc: string[],
): void {
  arrAllSentences.forEach((sentence) => {
    if (!arrAutoCompleteSentences.includes(sentence)) {
      arrKnowSentences.push(sentence);
    }
  });
  arrAllAudioSrc.forEach((audioSrc) => {
    if (!arrAutoCompleteAudio.includes(audioSrc)) {
      arrKnowAudioSrc.push(audioSrc);
    }
  });
  arrKnowSentences.forEach((sentence: string, index: number) => {
    const sentenceBlock = createElement('div', 'sentence');
    const audioBlock = createElement('div', 'audio-sentence-statistics');
    arrKnowSentencesElements.push(sentenceBlock);
    knowsWrapper.append(sentenceBlock);
    sentenceBlock.innerText = sentence;
    sentenceBlock.append(audioBlock);

    const soundSentence = new Audio(arrKnowAudioSrc[index]);
    audioBlock.addEventListener('click', () => {
      soundSentence.play();
    });
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
  paining,
  painingInformationStatistics,
};
