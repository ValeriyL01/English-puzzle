import './gameButtonsBlock.css';
import createElement from '../createElement';

const gameButtonsContainer = createElement('div', 'buttons-container');
const continueButton = createElement('button', 'continue-button', 'Continue') as HTMLButtonElement;
const checkButton = createElement('button', 'check-button', 'Check') as HTMLButtonElement;
const autoCompleteButton = createElement('button', 'auto-complete-button', 'Auto-Complete') as HTMLButtonElement;
continueButton.disabled = true;
checkButton.disabled = true;

gameButtonsContainer.append(continueButton, checkButton, autoCompleteButton);

export { gameButtonsContainer, continueButton, checkButton, autoCompleteButton };
