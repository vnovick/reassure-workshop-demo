import React, {PropsWithChildren} from 'react';
import {render, screen} from '@testing-library/react-native';
import {GameList} from './GameList';

import {jest, test, expect} from '@jest/globals';

jest.mock('../hooks', () => ({
  useGetGames: () => ({
    data: {
      pages: [
        {
          results: Array.from({length: 1000}, () => ({
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
  render(<GameList />, {wrapper});
  const gameItems = await screen.findAllByTestId('game-item');
  expect(gameItems).toHaveLength(1000);
  expect(screen.queryByTestId('spinner')).not.toBeTruthy();
  expect(screen.queryByTestId('list')).toBeOnTheScreen();
});
