import './gameButtonsBlock.css';
import createElement from '../createElement';

const gameButtonsContainer = createElement('div', 'buttons-container');
const continueButton = createElement('div', 'continue-button', 'Continue');
gameButtonsContainer.append(continueButton);
export default gameButtonsContainer;
