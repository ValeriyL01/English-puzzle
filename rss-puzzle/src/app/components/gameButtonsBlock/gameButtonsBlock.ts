import './gameButtonsBlock.css';
import createElement from '../createElement';

const gameButtonsContainer = createElement('div', 'buttons-container');
const continueButton = createElement('button', 'continue-button', 'Continue') as HTMLButtonElement;
continueButton.disabled = true;
gameButtonsContainer.append(continueButton);
export { gameButtonsContainer, continueButton };
