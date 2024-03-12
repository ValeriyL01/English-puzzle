import './hintButtonBlock.css';
import createElement from '../createElement';
import { translationSentence } from '../translationSentence/translationSentence';

const hintButtonContainer = createElement('div', 'hint-button-container');
const translationHintButton = createElement('button', 'translation-hint-button') as HTMLButtonElement;
const audioHintButton = createElement('button', 'audio-hint-button') as HTMLButtonElement;
hintButtonContainer.append(translationHintButton, audioHintButton);

if (localStorage.getItem('isTranslationHintButton') === 'true') {
  translationHintButton.classList.add('translation-hint-button--off');
  translationSentence.classList.add('translation-sentence--off');
} else {
  translationHintButton.classList.remove('translation-hint-button--off');
  translationSentence.classList.remove('translation-sentence--off');
}

translationHintButton.addEventListener('click', () => {
  translationHintButton.classList.toggle('translation-hint-button--off');
  translationSentence.classList.toggle('translation-sentence--off');

  localStorage.setItem(
    'isTranslationHintButton',
    translationHintButton.classList.contains('translation-hint-button--off').toString(),
  );
});
export { hintButtonContainer, translationHintButton, audioHintButton };
