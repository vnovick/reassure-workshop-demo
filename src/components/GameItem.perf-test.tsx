import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {GameItem} from './GameItem';
import {describe, test, expect} from '@jest/globals';
import {TGame} from '../api';
import {measurePerformance} from 'reassure';

describe('GameItem', () => {
  test('should render the GameItem component', async () => {
    const game: TGame = {
      name: 'Test Game',
      background_image: 'https://example.com/test.jpg',
      id: 1,
    };

    await measurePerformance(<GameItem game={game} />);
  });

  test('should increment likes when pressed', async () => {
    const game = {
      name: 'Test Game',
      background_image: 'https://example.com/test.jpg',
      id: 2,
    };

    const scenario = async () => {
      // Trigger a press event on the GameItem
      fireEvent.press(screen.getByTestId('game-item'));

      // Verify that the likes count is displayed after pressing
      await screen.getByText('Likes: 1');
    };

    // Render the GameItem component with a test game
    await measurePerformance(<GameItem game={game} />, {
      scenario,
    });
  });
});
