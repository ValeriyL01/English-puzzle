import wordCollectionLevel1 from '../../data/data/wordCollectionLevel1.json';

const imgUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/';
const audioUrlBase = 'https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/';
let roundIndex: number = 0;
let wordIndex: number = 0;

interface TextExample {
  textExample: string;
  textExampleTranslate: string;
  imgSrc: string;
  audioSrc: string;
}
const getNextTextExample = (): TextExample => {
  const currentData = wordCollectionLevel1.rounds[roundIndex].words[wordIndex];
  const { textExample, textExampleTranslate, audioExample } = currentData;
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
  const audioSrc = `${audioUrlBase}${audioExample}`;
  return { textExample, imgSrc, textExampleTranslate, audioSrc };
};

export default getNextTextExample;
