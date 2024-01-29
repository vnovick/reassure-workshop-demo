import React, {PropsWithChildren} from 'react';
import {screen} from '@testing-library/react-native';
import {GameList} from './GameList';

import {jest, test} from '@jest/globals';
import {measurePerformance} from 'reassure';
jest.setTimeout(60_000);
jest.mock('../hooks', () => ({
  useGetGames: () => ({
    data: {
      pages: [
        {
          results: Array.from({length: 100}, () => ({
            id: Math.random() * 10000,
            name: Math.random().toString(36).substring(7),
            background_url: `https://i.imgur.com/${Math.random()
              .toString(36)
              .substring(2)}.jpg`,
          })),
        },
      ],
    },
    hasNextPage: true,
    fetchNextPage: jest.fn(),
    isFetchingNextPage: false,
  }),
}));

test('Renders GameList', async () => {
  const createWrapper = () => {
    return ({children}: PropsWithChildren) => <>{children}</>;
  };
  const wrapper = createWrapper();

  const scenario = async () => {
    await screen.findAllByTestId('game-item');
  };
  await measurePerformance(<GameList />, {wrapper, scenario});
});
