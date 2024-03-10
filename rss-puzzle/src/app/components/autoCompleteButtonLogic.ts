import { currentLineDataWithPuzzles } from './logicVictory';
import { puzzleData } from './sourceDataBlock/sourceDataBlock';

import { puzzleContainers } from './resultBlock/resultBlock';

function autoComplete(): void {
  const words = currentLineDataWithPuzzles.textString.split(' ');
  words.forEach((word, index) => {
    if (puzzleData.wordCards[index]) {
      const card = puzzleData.wordCards[index];
      puzzleData.wordCards[index].innerText = word;
      puzzleContainers[puzzleData.currentPuzzleContainerIndex].append(card);
      card.classList.remove('word-card--passed');
      card.classList.remove('word-card--nopassed');
    }
  });
}

export default autoComplete;
