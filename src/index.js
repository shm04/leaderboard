import './styles/main.css';
import getScores from './getScore.js';
import createScore from './createScore.js';
import createGame from './createGame.js';

createGame('My cool new game');

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', async () => {
  const nameInput = document.getElementById('name').value;
  const scoresInput = document.getElementById('score').value;
  await createScore('SBvRSvvDplOFaTbdOe2K', nameInput, scoresInput);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
  await getScores('SBvRSvvDplOFaTbdOe2K');
});

const refreshBtn = document.querySelector('.refresh-btn');

refreshBtn.addEventListener('click', () => {
  getScores('SBvRSvvDplOFaTbdOe2K');
});

window.addEventListener('load', () => {
  getScores('SBvRSvvDplOFaTbdOe2K');
});
