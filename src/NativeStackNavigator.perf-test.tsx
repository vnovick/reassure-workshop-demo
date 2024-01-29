import * as React from 'react';
import {screen, fireEvent, waitFor} from '@testing-library/react-native';
import NativeStackNavigator from './NativeStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {test} from '@jest/globals';
import {AuthProvider} from './providers/AuthProvider';
import {measurePerformance} from 'reassure';

test('Navigation Container contains sign in form on initial state', async () => {
  await measurePerformance(
    <NavigationContainer>
      <AuthProvider>
        <NativeStackNavigator />
      </AuthProvider>
    </NavigationContainer>,
  );
});

test('Pressing an item takes user to the details screen', async () => {
  const scenario = async () => {
    fireEvent.changeText(screen.getByTestId('usernameInput'), 'admin');
    fireEvent.changeText(screen.getByTestId('passwordInput'), 'admin1');
    fireEvent.press(screen.getByRole('button', {name: 'Sign In'}));
    await waitFor(() => {
      screen.getByText(/Welcome admin!/);
    });

    const firstItem = screen.getByText('Item 1');
    fireEvent.press(firstItem);
    await screen.getByRole('header', {name: 'Details for Item 1'});
  };

  await measurePerformance(
    <NavigationContainer>
      <AuthProvider>
        <NativeStackNavigator />
      </AuthProvider>
    </NavigationContainer>,
    {
      scenario,
    },
  );
});
