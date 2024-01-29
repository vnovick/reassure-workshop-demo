import * as React from 'react';
import {screen, fireEvent, waitFor} from '@testing-library/react-native';
import {renderNavigator} from './test-utils';
import NativeStackNavigator from './NativeStackNavigator';
import {test, expect} from '@jest/globals';
import {AuthProvider} from './providers/AuthProvider';

test('Home screen contains Sign In form', () => {
  renderNavigator(
    <AuthProvider>
      <NativeStackNavigator />
    </AuthProvider>,
  );

  expect(
    screen.getByRole('header', {name: 'Sign in to Example App'}),
  ).toBeOnTheScreen();
  expect(screen.getAllByRole('button', {name: /Sign In/})).toHaveLength(1);
});

test('Pressing an item takes user to the details screen', async () => {
  renderNavigator(
    <AuthProvider>
      <NativeStackNavigator />
    </AuthProvider>,
  );

  const usernameInput = screen.getByTestId('usernameInput');
  const passwordInput = screen.getByTestId('passwordInput');
  const signInButton = screen.getByRole('button', {name: 'Sign In'});

  fireEvent.changeText(usernameInput, 'admin');
  fireEvent.changeText(passwordInput, 'admin1');
  fireEvent.press(signInButton);

  await waitFor(() => {
    expect(screen.getByText(/Welcome admin!/)).toBeOnTheScreen();
  });

  const firstItem = screen.getByText('Item 1');
  fireEvent.press(firstItem);

  expect(
    screen.getByRole('header', {name: 'Details for Item 1'}),
  ).toBeOnTheScreen();
});
