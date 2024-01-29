import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {WelcomeMessage} from './WelcomeMessage';
import {jest, test, expect} from '@jest/globals';

// Mock the AuthProvider to provide the user context
jest.mock('../providers/AuthProvider', () => ({
  useAuth: () => ({user: 'TestUser'}),
}));

test('WelcomeMessage component renders correctly', () => {
  const {getByText} = render(<WelcomeMessage />);

  // Assert that the component renders the correct welcome message
  const welcomeText = getByText('Welcome TestUser!');
  expect(welcomeText).toBeTruthy();
});
