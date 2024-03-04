import './sourseDataBlock.css';
import createElement from '../createElement';
import wordCollectionLevel1 from '../../../data/data/wordCollectionLevel1.json';
import resultBlock from '../resultBlock/resultBlock';

const sourseData = createElement('div', 'sourse-data');

// получение первой строчки для первой картинки
const { textExample } = wordCollectionLevel1.rounds[0].words[0];

// создание блоков со словами в рандомном порядке
function createWordsBlock(sentence: string): void {
  const words = sentence.split(' ');

  words
    .sort(() => Math.random() - 0.5)
    .forEach((word: string) => {
      const wordCard = createElement('div', 'word-card', `${word}`);
      sourseData.append(wordCard);
      wordCard.addEventListener('click', () => {
        resultBlock.append(wordCard);
      });
    });
}
createWordsBlock(textExample);
export default sourseData;
