import { currentLineDataWithPuzzles } from './logicVictory';
import { puzzleData } from './sourceDataBlock/sourceDataBlock';

import { puzzleContainers } from './resultBlock/resultBlock';

function autoComplete(): void {
  const widthParent = 768;
  const words = currentLineDataWithPuzzles.textString.split(' ');
  const wordLengthInit = words.length;
  const averageWidth = widthParent / wordLengthInit;
  words.forEach((word, index) => {
    if (puzzleData.wordCards[index]) {
      const card = puzzleData.wordCards[index];
      puzzleData.wordCards[index].innerText = word;
      puzzleContainers[puzzleData.currentPuzzleContainerIndex].append(card);
      card.style.width = `${averageWidth}px`;
      const wordWidth = word.length * 10;
      const fontSize = wordWidth >= widthParent / wordLengthInit ? '14px' : '18px';
      card.style.fontSize = fontSize;
      card.classList.remove('word-card--passed');
      card.classList.remove('word-card--nopassed');
    }
  });
}

export default autoComplete;
