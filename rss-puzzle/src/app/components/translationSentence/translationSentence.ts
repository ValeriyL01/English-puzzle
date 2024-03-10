import './translationSentence.css';
import createElement from '../createElement';

const translationSentenceContainer = createElement('div', 'translation-sentence-container');
const translationSentence = createElement('span', 'translation-sentence', '');
translationSentenceContainer.append(translationSentence);

export { translationSentenceContainer, translationSentence };
