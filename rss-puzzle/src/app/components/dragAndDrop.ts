import { PuzzleData } from '../types/types';

function drag(event: DragEvent): void {
  const targetWordCard = event.target as HTMLElement;

  if (targetWordCard) {
    event.dataTransfer?.setData('id', targetWordCard.id);
  }
}
function allowDrop(event: Event): void {
  event.preventDefault();
}

function drop(
  event: DragEvent,
  puzzleData: PuzzleData,
  sourseData: HTMLElement,
  currentPuzzleContainer: HTMLElement,
): void {
  const draggableWordCard = event.dataTransfer?.getData('id');
  const targetElement = event.target as HTMLElement;
  if (event.target !== null && draggableWordCard) {
    const wordCard = document.getElementById(draggableWordCard);
    if (wordCard) {
      puzzleData.wordCards.forEach((element: HTMLElement) => {
        const card = element;
        card.classList.remove('word-card--passed', 'word-card--nopassed');
      });
      if (targetElement.classList.contains('sourse-data')) {
        sourseData.append(wordCard);
      }
      const x = event.clientX;
      const y = event.clientY;
      const targetWordCard = document.elementFromPoint(x, y) as HTMLElement;
      if (targetWordCard.classList.contains('word-card')) {
        const rect = targetWordCard.getBoundingClientRect();
        if (x < rect.left + rect.width / 2) {
          targetWordCard.before(wordCard);
        } else {
          targetWordCard.after(wordCard);
        }
      } else {
        currentPuzzleContainer.append(wordCard);
      }
      if (wordCard.dataset.clicked === 'false') {
        wordCard.dataset.clicked = 'true';
      } else {
        wordCard.dataset.clicked = 'false';
      }
    }
  }
  event.preventDefault();
}

export { drag, allowDrop, drop };
