import {BASE_URL, API_KEY} from '../config';

export const gamesApi = {
  fetchAllGames: ({pageParam = 1}) =>
    fetch(`${BASE_URL}/games?key=${API_KEY}&page=${pageParam}`).then(res => {
      return res.json();
    }),
  fetchScreenShots: (gameId: any) =>
    fetch(`${BASE_URL}/games/${gameId}screenshots?key=${API_KEY}`).then(res => {
      return res.json();
    }),
};

export type TGame = {
  id: number;
  name: string;
  background_image: string;
};
