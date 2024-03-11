import './hintButtonBlock.css';
import createElement from '../createElement';
import { translationSentence } from '../translationSentence/translationSentence';

const hintButtonContainer = createElement('div', 'hint-button-container');
const translationHintButton = createElement('button', 'translation-hint-button') as HTMLButtonElement;
const audioHintButton = createElement('button', 'audio-hint-button') as HTMLButtonElement;
hintButtonContainer.append(translationHintButton, audioHintButton);

translationHintButton.addEventListener('click', () => {
  translationHintButton.classList.toggle('translation-hint-button--off');
  translationSentence.classList.toggle('translation-sentence--off');
});
export { hintButtonContainer, translationHintButton, audioHintButton };
