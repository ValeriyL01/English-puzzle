import wordCollectionLevel1 from '../../data/data/wordCollectionLevel1.json';

const imgUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/';

let roundIndex: number = 0;
let wordIndex: number = 0;

const getNextTextExample = (): { textExample: string; imgSrc: string } => {
  const { textExample } = wordCollectionLevel1.rounds[roundIndex].words[wordIndex];
  const img = wordCollectionLevel1.rounds[roundIndex].levelData.cutSrc;

  if (wordIndex < 9) {
    wordIndex += 1;
  } else {
    wordIndex = 0;

    if (roundIndex < 44) {
      roundIndex += 1;
    } else {
      roundIndex = 0;
    }
  }
  const imgSrc = `${imgUrlBase}${img}`;
  return { textExample, imgSrc };
};

export default getNextTextExample;
