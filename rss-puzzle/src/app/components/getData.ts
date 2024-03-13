import * as wordCollectionLevel1 from '../../data/data/wordCollectionLevel1.json';
import * as wordCollectionLevel2 from '../../data/data/wordCollectionLevel2.json';
import * as wordCollectionLevel3 from '../../data/data/wordCollectionLevel3.json';
import * as wordCollectionLevel4 from '../../data/data/wordCollectionLevel4.json';
import * as wordCollectionLevel5 from '../../data/data/wordCollectionLevel5.json';
import * as wordCollectionLevel6 from '../../data/data/wordCollectionLevel6.json';
import { selectPage, selectLevel } from './selectionLevel/selectionLevel';
import { createWordsBlock, puzzleData } from './sourceDataBlock/sourceDataBlock';
import { updateData, clearPuzzleContainers, showPuzzleContainers } from './logicVictory';

const imgUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/';
const audioUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/';
let roundIndex: number = 0;
let wordIndex: number = 0;
let levelIndex: number = 0;
interface TextExample {
  textExample: string;
  textExampleTranslate: string;
  imgSrc: string;
  audioSrc: string;
}
const wordCollections = [
  wordCollectionLevel1,
  wordCollectionLevel2,
  wordCollectionLevel3,
  wordCollectionLevel4,
  wordCollectionLevel5,
  wordCollectionLevel6,
];
const getRoundIndexLimit = (level: number): number => {
  switch (level) {
    case 0:
      return 45;
    case 1:
      return 41;
    case 2:
      return 40;
    case 3:
      return 29;
    case 4:
      return 29;
    case 5:
      return 25;
    default:
      return 45;
  }
};
const getNextDataExample = (): TextExample => {
  const currentData = wordCollections[levelIndex].rounds[roundIndex].words[wordIndex];
  const { textExample, textExampleTranslate, audioExample } = currentData;
  const img = wordCollections[levelIndex].rounds[roundIndex].levelData.cutSrc;

  if (wordIndex < 9) {
    wordIndex += 1;
  } else {
    wordIndex = 0;

    if (roundIndex <= getRoundIndexLimit(levelIndex)) {
      roundIndex += 1;
    } else {
      roundIndex = 0;
      levelIndex += 1;
    }
    if (levelIndex <= 6) {
      levelIndex = 0;
    }
  }
  const imgSrc = `${imgUrlBase}${img}`;
  const audioSrc = `${audioUrlBase}${audioExample}`;
  return { textExample, imgSrc, textExampleTranslate, audioSrc };
};

const switchLevelAndRound = (level: number, round: number): TextExample => {
  const currentData = wordCollections[level].rounds[round].words[0];
  const { textExample, textExampleTranslate, audioExample } = currentData;
  const img = wordCollections[level].rounds[round].levelData.cutSrc;

  const imgSrc = `${imgUrlBase}${img}`;
  const audioSrc = `${audioUrlBase}${audioExample}`;
  return { textExample, imgSrc, textExampleTranslate, audioSrc };
};

function changingDisplayedData(): void {
  const { textExample, imgSrc, textExampleTranslate, audioSrc } = switchLevelAndRound(levelIndex, roundIndex);
  updateData(audioSrc, textExample, textExampleTranslate, imgSrc);
  clearPuzzleContainers();
  showPuzzleContainers();
  createWordsBlock(textExample);

  puzzleData.currentPuzzleContainerIndex = 0;
  puzzleData.counterGuessedLines = 0;
  wordIndex = 1;
}

selectPage.addEventListener('change', () => {
  const pageNumber = Number(selectPage.value);

  roundIndex = pageNumber - 1;

  changingDisplayedData();
});
selectLevel.addEventListener('change', () => {
  const levelValue = Number(selectLevel.value);
  levelIndex = levelValue - 1;
  roundIndex = 0;
  changingDisplayedData();
});
const { textExample } = getNextDataExample();
createWordsBlock(textExample);
export { getNextDataExample };
