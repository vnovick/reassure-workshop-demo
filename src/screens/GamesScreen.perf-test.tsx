import * as React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {GamesScreen} from './GamesScreen';
import {test, jest} from '@jest/globals';
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

test('Game List render', async () => {
  await measurePerformance(<GamesScreen />);
});

test('Game List render and click on likes', async () => {
  const scenario = async () => {
    const gameItems = await screen.findAllByTestId('game-item');
    await fireEvent(gameItems[0], 'press');
  };

  await measurePerformance(<GamesScreen />, {scenario});
});
