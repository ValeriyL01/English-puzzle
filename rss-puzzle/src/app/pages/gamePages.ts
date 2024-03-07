import './gamePages.css';
import createElement from '../components/createElement';
import { sourseData } from '../components/sourceDataBlock/sourceDataBlock';
import { resultBlock } from '../components/resultBlock/resultBlock';
import { gameButtonsContainer } from '../components/gameButtonsBlock/gameButtonsBlock';

const gamePages = createElement('div', 'game-pages');
gamePages.append(resultBlock, sourseData, gameButtonsContainer);
export default gamePages;
