import * as React from 'react';
import {screen, fireEvent} from '@testing-library/react-native';
import {renderWithRedux} from '../test-utils';
import AddTodo from './AddTodo';
import {test, expect} from '@jest/globals';

test('adds a new todo to redux store when submitting form', () => {
  const {store} = renderWithRedux(<AddTodo />, {});

  const input = screen.getByPlaceholderText(/To Do/i);
  expect(input).toBeTruthy();

  const textToEnter = 'This is a random element';
  fireEvent.changeText(input, textToEnter);
  fireEvent.press(screen.getByText('Add Todos'));

  const todosState = store.getState().todos;
  expect(todosState).toHaveLength(1);
  expect(todosState).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        text: textToEnter,
        date: expect.stringMatching(
          /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
        ),
      }),
    ]),
  );
});
