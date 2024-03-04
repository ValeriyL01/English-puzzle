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
const startScreenContainer = createElement('div');
const startScreenGreeting = createElement('span', 'start-screen-greeting', 'Welcome ');
const startScreenName = createElement(
  'span',
  'start-screen-greeting-name',
  `${localStorage.getItem('firstName')} ${localStorage.getItem('surname')}`,
);
const startScreenButton = createElement('div', 'start-screen-button', 'Start');

startScreen.append(startScreenContent);
startScreenContainer.append(startScreenGreeting, startScreenName);
startScreenContent.append(startScreenTitle, startScreenText, startScreenContainer, startScreenButton);

export { startScreen, startScreenName };
