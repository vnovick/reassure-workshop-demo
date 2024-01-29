import * as React from 'react';
import {render, screen} from '@testing-library/react-native';
import {GamesScreen} from './GamesScreen';
import {test, jest, expect} from '@jest/globals';

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

test('Game List screen renders correct number of items', () => {
  render(<GamesScreen />);

  expect(screen.getByRole('header', {name: 'Explore Games'})).toBeOnTheScreen();
  //AFter changing to flatlist that should change
  expect(screen.getAllByTestId('game-item')).toHaveLength(1000);
});
