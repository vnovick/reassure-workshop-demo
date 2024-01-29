import React from 'react';
import {screen, fireEvent, waitFor} from '@testing-library/react-native';
import {renderWithRedux} from '../test-utils';
import TodoList from './TodoList';
import {test, expect} from '@jest/globals';

const initialState = {
  todos: [
    {id: '1', text: 'Sing something', date: new Date().toISOString()},
    {id: '2', text: 'Dance something', date: new Date().toISOString()},
    {id: '3', text: 'Sleep something', date: new Date().toISOString()},
    {id: '4', text: 'Sleep something', date: new Date().toISOString()},
  ],
};

test('it should execute with a store with 4 elements', () => {
  renderWithRedux(<TodoList />, {initialState});

  const todoElems = screen.getAllByText(/something/i);
  expect(todoElems).toHaveLength(4);
});

test('should display 4 elements and end up with 3 after delete', async () => {
  renderWithRedux(<TodoList />, {initialState});

  // Assuming your TodoElem component renders a 'Delete' button
  const deleteButtons = screen.getAllByText('Delete');
  expect(deleteButtons).toHaveLength(4);

  // Simulate pressing the first delete button
  fireEvent.press(deleteButtons[0]);

  await waitFor(() => {
    const updatedTodoElems = screen.queryAllByText(/something/i);
    expect(updatedTodoElems).toHaveLength(3);
  });
});
