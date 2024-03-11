import './audioSentence.css';
import createElement from '../createElement';
import { currentLineDataWithPuzzles } from '../logicVictory';
import { audioHintButton, translationHintButton } from '../hintButtonBlock/hintButtonBlock';
import { continueButton } from '../gameButtonsBlock/gameButtonsBlock';

const audioSentence = createElement('div', 'audio-sentence');

let isPlayAudio = true;

function playAudio(audio: string): void {
  const soundText = new Audio(audio);
  soundText.volume = 0.5;
  soundText.play();
  soundText.addEventListener('play', () => {
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

audioHintButton.addEventListener('click', () => {
  audioSentence.classList.toggle('audio-sentence--off');
  audioHintButton.classList.toggle('audio-hint-button--off');
});
continueButton.addEventListener('click', () => {
  if (audioHintButton.classList.contains('audio-hint-button--off')) {
    audioSentence.classList.add('audio-sentence--off');
  }
  translationHintButton.disabled = false;
  audioHintButton.disabled = false;
});

export { audioSentence };
