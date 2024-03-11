import './hintButtonBlock.css';
import createElement from '../createElement';
import { translationSentence } from '../translationSentence/translationSentence';

const hintButtonContainer = createElement('div', 'hint-button-container');
const translationHintButton = createElement('div', 'translation-hint-button');
translationHintButton.addEventListener('click', () => {
  translationHintButton.classList.toggle('translation-hint-button--off');
  translationSentence.classList.toggle('translation-sentence--off');
});
hintButtonContainer.append(translationHintButton);
export { hintButtonContainer, translationHintButton };
