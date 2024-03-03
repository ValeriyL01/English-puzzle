import './startScreen.css';
import createElement from '../createElement';

const startScreen = createElement('div', 'start-screen');
const startScreenContent = createElement('div', 'start-screen-content');

const startScreenTitle = createElement('h1', 'start-screen-title', 'ENGLISH  PUZZLE');
const startScreenText = createElement(
  'p',
  'start-screen-text',
  'This is an English language learning game where you have to make sentences out of words to reveal puzzle pieces with works of art.',
);
startScreen.append(startScreenContent);
startScreenContent.append(startScreenTitle, startScreenText);
export default startScreen;
