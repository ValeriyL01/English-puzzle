import './audioSentence.css';
import createElement from '../createElement';
import { currentLineDataWithPuzzles } from '../logicVictory';

const audioSentence = createElement('div', 'audio-sentence');

function playAudio(audio: string): void {
  const soundText = new Audio(audio);
  soundText.volume = 0.5;
  soundText.play();
}
audioSentence.addEventListener('click', () => {
  playAudio(currentLineDataWithPuzzles.audio);
});
export { audioSentence, playAudio };
