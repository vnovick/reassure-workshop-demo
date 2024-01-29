import * as React from 'react';
import {screen, fireEvent} from '@testing-library/react-native';
import AddTodo from './AddTodo';
import {test} from '@jest/globals';
import {Provider} from 'react-redux';
import makeStore from '../store';
import {measurePerformance} from 'reassure';

const initialState = {};

const store = makeStore(initialState);

const wrapper = ({children}: React.PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

test('adds a new todo to redux store when submitting form', async () => {
  const scenario = async () => {
    const input = screen.getByPlaceholderText(/To Do/i);
    const textToEnter = 'This is a random element';
    fireEvent.changeText(input, textToEnter);
    fireEvent.press(screen.getByText('Add Todos'));
  };

  await measurePerformance(<AddTodo />, {
    scenario,
    wrapper,
  });
});
