import {useInfiniteQuery} from 'react-query';
import {gamesApi} from '../api';

export function useGetGames() {
  return useInfiniteQuery('games', gamesApi.fetchAllGames, {
    getNextPageParam: lastPage => {
      if (lastPage.next !== null) {
        return lastPage.next;
      }

      return lastPage;
    },
  });
}
