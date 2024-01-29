import * as React from 'react';
import {screen, fireEvent} from '@testing-library/react-native';
import {renderWithRedux} from './test-utils';
import DrawerNavigator from './DrawerNavigator';
import {jest, test, expect} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('./providers/AuthProvider', () => ({
  useAuth: () => ({
    user: 'testUser',
    login: jest.fn(),
    logout: jest.fn(),
  }),
}));

test('Changing screens', () => {
  renderWithRedux(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>,
    {},
  );

  // Assert initial screen
  expect(
    screen.getByRole('header', {name: 'Welcome testUser!'}),
  ).toBeOnTheScreen();

  // Open drawer by pressing button
  const toggleButton = screen.getAllByRole('button')[0];
  fireEvent.press(toggleButton);

  // Assert drawer state
  expect(screen.getByRole('button', {name: 'Home'})).toBeSelected();
  expect(screen.getByRole('button', {name: 'Settings'})).not.toBeSelected();

  // Press drawer item
  fireEvent.press(screen.getByRole('button', {name: 'Settings'}));

  // Assert drawer state after action
  expect(screen.getByRole('button', {name: 'Home'})).not.toBeSelected();
  expect(screen.getByRole('button', {name: 'Settings'})).toBeSelected();

  // Assert visible screen
  expect(screen.getByRole('header', {name: 'Settings List'})).toBeOnTheScreen();
  expect(
    screen.queryByRole('header', {name: 'Home screen'}),
  ).not.toBeOnTheScreen();
});
