import { Zrzutka } from '../types/zrzutka';
import { API_BASE_URL, CORS_DEALER } from '../../utils/consts';

export const searchZrzutkas = (query: string, page = 1): Promise<Zrzutka[]> => {
  const url =
    CORS_DEALER +
    encodeURIComponent(
      `${API_BASE_URL}/chips?term=${query}&page=${page}&limit=12`
    );

  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-ZRZUTKA-ACCEPT-LANGUAGE': 'en',
  });

  return fetch(url, {
    method: 'GET',
    headers,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};
