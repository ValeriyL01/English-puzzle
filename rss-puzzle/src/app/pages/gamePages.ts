import './gamePages.css';
import createElement from '../components/createElement';
import { sourseData } from '../components/sourceDataBlock/sourceDataBlock';
import { resultBlock } from '../components/resultBlock/resultBlock';
import { gameButtonsContainer } from '../components/gameButtonsBlock/gameButtonsBlock';
import { translationSentenceContainer } from '../components/translationSentence/translationSentence';
import { hintButtonContainer } from '../components/hintButtonBlock/hintButtonBlock';
import { audioSentence } from '../components/audioSentence/audioSentence';
import { selectionLevelForm } from '../components/selectionLevel/selectionLevel';
import informationPaining from '../components/informationPaining/inforvationPaining';

const gamePages = createElement('div', 'game-pages');
const levelHintContainer = createElement('div', 'level-hint-wrapper');
levelHintContainer.append(selectionLevelForm, hintButtonContainer);
gamePages.append(
  levelHintContainer,
  audioSentence,
  translationSentenceContainer,
  resultBlock,
  informationPaining,
  sourseData,
  gameButtonsContainer,
);

export default gamePages;
