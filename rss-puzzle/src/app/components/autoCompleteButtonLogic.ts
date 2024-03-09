import { currentLineDataWithPuzzles } from './logicVictory';
import { puzzleContainerData } from './sourceDataBlock/sourceDataBlock';

import { puzzleContainers } from './resultBlock/resultBlock';

function autoComplete(): void {
  const words = currentLineDataWithPuzzles.textString.split(' ');
  words.forEach((word, index) => {
    if (puzzleContainerData.wordCards[index]) {
      const card = puzzleContainerData.wordCards[index];
      puzzleContainerData.wordCards[index].innerText = word;
      puzzleContainers[puzzleContainerData.currentPuzzleContainerIndex].append(card);
      card.classList.remove('word-card--passed');
      card.classList.remove('word-card--nopassed');
    }
  });
}

export default autoComplete;
