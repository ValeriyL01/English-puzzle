import './audioSentence.css';
import createElement from '../createElement';
import { currentLineDataWithPuzzles } from '../logicVictory';

const audioSentence = createElement('div', 'audio-sentence');

let isPlayAudio = true;

function playAudio(audio: string): void {
  const soundText = new Audio(audio);
  soundText.volume = 0.5;
  soundText.play();
  soundText.addEventListener('play', () => {
    // Применяем keyframes анимацию к элементу audioSentence
    audioSentence.style.animation = 'audioAnimation 0.5s infinite';
  });
  soundText.addEventListener('ended', () => {
    audioSentence.style.animationPlayState = 'paused';
    isPlayAudio = true;
  });
}

audioSentence.addEventListener('click', () => {
  if (isPlayAudio) {
    playAudio(currentLineDataWithPuzzles.audio);
  }
  isPlayAudio = false;
});

export { audioSentence, playAudio };
