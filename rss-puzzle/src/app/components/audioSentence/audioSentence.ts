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

if (localStorage.getItem('isAudioHintButton') === 'true') {
  audioSentence.classList.add('audio-sentence--off');
  audioHintButton.classList.add('audio-hint-button--off');
} else {
  audioSentence.classList.remove('audio-sentence--off');
  audioHintButton.classList.remove('audio-hint-button--off');
}

audioHintButton.addEventListener('click', () => {
  audioSentence.classList.toggle('audio-sentence--off');
  audioHintButton.classList.toggle('audio-hint-button--off');
  localStorage.setItem('isAudioHintButton', audioHintButton.classList.contains('audio-hint-button--off').toString());
});

continueButton.addEventListener('click', () => {
  if (audioHintButton.classList.contains('audio-hint-button--off')) {
    audioSentence.classList.add('audio-sentence--off');
  }
  translationHintButton.disabled = false;
  audioHintButton.disabled = false;
});

export { audioSentence };
