import getNextTextExample from './getData';
import { resultBlock, puzzleContainers } from './resultBlock/resultBlock';
import { continueButton } from './gameButtonsBlock/gameButtonsBlock';
import { createWordsBlock } from './sourceDataBlock/sourceDataBlock';

let currentPuzzleContainerIndex = 0;
let counterGuessedLines = 0;
const quantityPuzzleContainers = 10;
let text = 'The students agree they have too much homework'; // первая строчка первого раунда
function clearPuzzleContainers(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    while (puzzleContainer.firstChild) {
      puzzleContainer.removeChild(puzzleContainer.firstChild);
    }
  });
}
function showPuzzleContainers(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.style.background = '#dde6eb';
    puzzleContainerCopy.style.opacity = '1';
    puzzleContainerCopy.style.pointerEvents = 'auto';
  });
}
function changePuzzleContainerIndex(): void {
  if (currentPuzzleContainerIndex < 9) {
    currentPuzzleContainerIndex += 1;
  } else {
    currentPuzzleContainerIndex = 0;
    clearPuzzleContainers();
    showPuzzleContainers();
  }
}

continueButton.addEventListener('click', () => {
  changePuzzleContainerIndex();
  const { textExample, imgSrc } = getNextTextExample();
  text = textExample;
  resultBlock.style.backgroundImage = `url(${imgSrc})`;
  createWordsBlock(text);
  continueButton.disabled = true;
});
function showImagePuzzle(): void {
  puzzleContainers.forEach((puzzleContainer: HTMLElement) => {
    const puzzleContainerCopy = puzzleContainer;
    puzzleContainerCopy.style.background = 'transparent';
    puzzleContainerCopy.style.opacity = '0';
  });
}

function comparisonString(textData?: string): void {
  const { children }: { children: HTMLCollection } = puzzleContainers[currentPuzzleContainerIndex];
  const textArr: string[] = [];
  const childrenArray: HTMLElement[] = Array.from(children) as HTMLElement[];
  childrenArray.forEach((child: HTMLElement) => {
    textArr.push(child.innerText);
  });

  const textString = textArr.join(' ');
  if (textData === textString) {
    continueButton.disabled = false;
    puzzleContainers[currentPuzzleContainerIndex].style.opacity = '0.6';
    puzzleContainers[currentPuzzleContainerIndex].style.pointerEvents = 'none';
    counterGuessedLines += 1;
    if (counterGuessedLines >= quantityPuzzleContainers) {
      showImagePuzzle();
      counterGuessedLines = 0;
    }
  }
  console.log(textData, textString);
}

export function observeResultBlockChanges(): void {
  const observer = new MutationObserver(() => {
    comparisonString(text);
  });

  const config: MutationObserverInit = {
    childList: true,
    subtree: true,
  };

  observer.observe(resultBlock, config);
}
