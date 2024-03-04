import './sourseDataBlock.css';
import createElement from '../createElement';
import wordCollectionLevel1 from '../../../data/data/wordCollectionLevel1.json';

const sourseData = createElement('div', 'sourse-data');

// получение первой строчки для первой картинки
const { textExample } = wordCollectionLevel1.rounds[0].words[0];

// создание блоков со словами в рандомном порядке
function createWordsBlock(sentence: string): void {
  const words = sentence.split(' ');

  words
    .sort(() => Math.random() - 0.5)
    .forEach((word: string) => {
      sourseData.append(createElement('div', 'word-card', `${word}`));
    });
}
createWordsBlock(textExample);
export default sourseData;
