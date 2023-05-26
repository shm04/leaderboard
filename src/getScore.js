import baseUrl from './baseURL.js';

const getScores = async (gameId) => {
  const url = `${baseUrl}/games/${gameId}/scores/`;

  try {
    const response = await fetch(url);
    const scores = await response.json();

    const scoresContainer = document.querySelector('.scores-cont');
    scoresContainer.innerHTML = '';

    const scoreList = scores.result;

    scoreList.forEach((score) => {
      const p = document.createElement('p');
      p.className = 'score-p';
      p.textContent = `${score.user}: ${score.score}`;
      scoresContainer.appendChild(p);
    });
    return scoreList;
  } catch (error) {
    return error;
  }
};

export default getScores;
