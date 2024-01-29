import React from 'react';
import TodoElem from './TodoElem';
import {jest, describe, test} from '@jest/globals';
import {measurePerformance} from 'reassure';
import {fireEvent, screen} from '@testing-library/react-native';
const mockTodo = {
  id: 1,
  text: 'Test Todo',
  date: new Date().toISOString(),
};

describe('TodoElem', () => {
  test('TodoElem component renders correctly', async () => {
    await measurePerformance(<TodoElem todo={mockTodo} onDelete={jest.fn()} />);
  });

  test('TodoElem component renders correctly and deleting', async () => {
    const scenario = async () => {
      const deleteButton = screen.getByText('Delete');
      fireEvent.press(deleteButton);
    };
    await measurePerformance(
      <TodoElem todo={mockTodo} onDelete={jest.fn()} />,
      {
        scenario,
      },
    );
  });
});
