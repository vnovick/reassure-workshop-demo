import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {GameItem} from './GameItem';
import {describe, test, expect} from '@jest/globals';
import {TGame} from '../api';

describe('GameItem', () => {
  test('should render the GameItem component', () => {
    const game: TGame = {
      name: 'Test Game',
      background_image: 'https://example.com/test.jpg',
      id: 1,
    };

    render(<GameItem game={game} />);

    // Verify that the game name is displayed
    expect(screen.getByText('Test Game')).toBeTruthy();
  });

  test('should increment likes when pressed', async () => {
    const game = {
      name: 'Test Game',
      background_image: 'https://example.com/test.jpg',
      id: 2,
    };

    // Render the GameItem component with a test game
    render(<GameItem game={game} />);

    // Verify that the game name is displayed
    expect(screen.getByText('Test Game')).toBeTruthy();

    // Verify that the likes count is not displayed initially
    expect(screen.queryByText('Likes: 0')).toBeNull();

    // Trigger a press event on the GameItem
    fireEvent.press(screen.getByTestId('game-item'));

    // Verify that the likes count is displayed after pressing
    expect(screen.getByText('Likes: 1')).toBeTruthy();
  });
});
