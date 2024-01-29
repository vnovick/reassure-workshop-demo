import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import TodoElem from './TodoElem';
import {jest, test, describe, expect} from '@jest/globals';

const mockTodo = {
  id: 1,
  text: 'Test Todo',
  date: new Date().toISOString(),
};

describe('TodoElem tests', () => {
  test('TodoElem component renders correctly', () => {
    const onDeleteMock = jest.fn();
    const {getByText} = render(
      <TodoElem todo={mockTodo} onDelete={onDeleteMock} />,
    );

    // Assert that the component renders the todo text
    const todoText = getByText('Test Todo');
    expect(todoText).toBeTruthy();
  });

  test('TodoElem component delete working correctly', () => {
    const onDeleteMock = jest.fn();
    const {getByText} = render(
      <TodoElem todo={mockTodo} onDelete={onDeleteMock} />,
    );

    // Assert that the component renders the todo text
    const todoText = getByText('Test Todo');
    expect(todoText).toBeTruthy();

    // Simulate a button click
    const deleteButton = getByText('Delete');
    fireEvent.press(deleteButton);

    // Assert that the onDelete function is called with the correct todo id
    expect(onDeleteMock).toHaveBeenCalledWith(1);
  });
});
