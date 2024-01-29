import React from 'react';
import {WelcomeMessage} from './WelcomeMessage';
import {jest, test} from '@jest/globals';
import {measurePerformance} from 'reassure';

// Mock the AuthProvider to provide the user context
jest.mock('../providers/AuthProvider', () => ({
  useAuth: () => ({user: 'TestUser'}),
}));

test('WelcomeMessage component renders correctly', async () => {
  await measurePerformance(<WelcomeMessage />);
});
