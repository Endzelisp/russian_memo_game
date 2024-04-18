import { getElement, getRandomNum } from "./utils.js";
import { WORDS } from "./words.js";

const actionButton = getElement('.controls > button');
const answerDisplay = getElement('.flash-card__answer');
const userInputEl = getElement('.user-input-wrapper > input');
const imageEl = getElement('.image-wrapper > img');
const feedback = getElement('#feedback');

const PATH = './assets/';
const FILE_EXTENSION = '.webp';

let [fileName, rightAnser] =  WORDS[getRandomNum(WORDS.length)];
imageEl.src = `${PATH}${fileName}${FILE_EXTENSION}`


actionButton.addEventListener('click', () => {
  let isValidAnser = false;

  const userInput = userInputEl.value.toLowerCase();
  if (userInput === '') return
  isValidAnser = rightAnser === userInput;
  if (!isValidAnser) {
    feedback.textContent = '❌';
    return
  }
  answerDisplay.textContent = rightAnser;
  feedback.textContent =  '✅';
  setTimeout(() => {
    answerDisplay.textContent = '';
    userInputEl.value = '';
    feedback.textContent =  '';
    [fileName, rightAnser] =  WORDS[getRandomNum(WORDS.length)];
    imageEl.src = `${PATH}${fileName}${FILE_EXTENSION}`
  }, 2000)
})