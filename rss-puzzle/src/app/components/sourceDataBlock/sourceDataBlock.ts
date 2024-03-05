import './sourseDataBlock.css';
import createElement from '../createElement';
import wordCollectionLevel1 from '../../../data/data/wordCollectionLevel1.json';
import resultBlock from '../resultBlock/resultBlock';

const sourseData = createElement('div', 'sourse-data');

// получение первой строчки для первой картинки
const { textExample } = wordCollectionLevel1.rounds[0].words[0];

function addClickListenerCard(wordCard: HTMLElement): void {
  const card = wordCard;
  card.addEventListener('click', () => {
    if (card.dataset.clicked === 'false') {
      resultBlock.append(card);
      card.dataset.clicked = 'true';
    } else {
      sourseData.prepend(card);
      card.dataset.clicked = 'false';
    }
  });
}
// создание блоков со словами в рандомном порядке
function createWordsBlock(sentence: string): void {
  const words = sentence.split(' ');
  const widthParent = 768;
  const wordLengthInit = words.length;
  const averageWidth = widthParent / wordLengthInit;

  words
    .sort(() => Math.random() - 0.5)
    .forEach((word) => {
      const wordCard = createElement('div', 'word-card', word);
      wordCard.dataset.clicked = 'false';
      sourseData.append(wordCard);
      wordCard.style.width = `${averageWidth}px`;
      const wordWidth = word.length * 10;
      const fontSize = wordWidth > widthParent / wordLengthInit ? '14px' : '18px';
      wordCard.style.fontSize = fontSize;

      addClickListenerCard(wordCard);
    });
}

createWordsBlock(textExample);
export default sourseData;
