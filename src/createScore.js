import baseUrl from './baseURL.js';

const createScore = async (gameId, user, score) => {
  const url = `${baseUrl}/games/${gameId}/scores/`;
  const data = { user, score };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default createScore;
