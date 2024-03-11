import './gamePages.css';
import createElement from '../components/createElement';
import { sourseData } from '../components/sourceDataBlock/sourceDataBlock';
import { resultBlock } from '../components/resultBlock/resultBlock';
import { gameButtonsContainer } from '../components/gameButtonsBlock/gameButtonsBlock';
import { translationSentenceContainer } from '../components/translationSentence/translationSentence';
import { hintButtonContainer } from '../components/hintButtonBlock/hintButtonBlock';

const gamePages = createElement('div', 'game-pages');
const levelHintContainer = createElement('div', 'level-hint-wrapper');
levelHintContainer.append(hintButtonContainer);
gamePages.append(levelHintContainer, translationSentenceContainer, resultBlock, sourseData, gameButtonsContainer);

export default gamePages;
