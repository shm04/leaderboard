import baseUrl from './baseURL.js';

const createGame = async (name) => {
  const url = `${baseUrl}/games/`;
  const data = { name };

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

export default createGame;
