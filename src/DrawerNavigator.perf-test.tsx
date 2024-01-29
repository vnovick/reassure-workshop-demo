import * as React from 'react';
import {screen, fireEvent} from '@testing-library/react-native';
import {renderWithRedux} from './test-utils';
import DrawerNavigator from './DrawerNavigator';
import {jest, test, expect} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';
import makeStore from './store';
import {Provider} from 'react-redux';
import {measurePerformance} from 'reassure';

jest.mock('./providers/AuthProvider', () => ({
  useAuth: () => ({
    user: 'testUser',
    login: jest.fn(),
    logout: jest.fn(),
  }),
}));

test('Changing screens', async () => {
  const store = makeStore({});

  const wrapper = ({children}: React.PropsWithChildren) => (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );

  const scenario = async () => {
    const toggleButton = screen.getAllByRole('button')[0];
    fireEvent.press(toggleButton);
    fireEvent.press(screen.getByRole('button', {name: 'Settings'}));
    await screen.getByRole('header', {name: 'Settings List'});
  };

  await measurePerformance(<DrawerNavigator />, {
    scenario,
    wrapper,
  });
});
