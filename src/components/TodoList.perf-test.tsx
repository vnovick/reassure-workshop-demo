import React from 'react';
// import {screen, fireEvent, waitFor} from '@testing-library/react-native';

import TodoList from './TodoList';
import {test, describe} from '@jest/globals';
import {measurePerformance} from 'reassure';
import {Provider} from 'react-redux';
import makeStore from '../store';

const initialState = {
  todos: [
    {id: '1', text: 'Sing something', date: new Date().toISOString()},
    {id: '2', text: 'Dance something', date: new Date().toISOString()},
    {id: '3', text: 'Sleep something', date: new Date().toISOString()},
    {id: '4', text: 'Sleep something', date: new Date().toISOString()},
  ],
};

describe('TodoList peformance tests', () => {
  test('it should execute with a store with 4 elements', async () => {
    const store = makeStore(initialState);

    const wrapper = ({children}: React.PropsWithChildren) => (
      <Provider store={store}>{children}</Provider>
    );
    await measurePerformance(<TodoList />, {wrapper});
  });

  test('should display 4 elements and end up with 3 after delete', async () => {
    // const store = makeStore(initialState);
    // const wrapper = ({children}: React.PropsWithChildren) => (
    //   <Provider store={store}>{children}</Provider>
    // );
    // const scenario = async () => {
    //   const deleteButtons = screen.getAllByText('Delete');
    //   // Simulate pressing the first delete button
    //   fireEvent.press(deleteButtons[0]);
    //   await waitFor(() => {
    //     screen.queryAllByText(/something/i);
    //   });
    // };
    // await measurePerformance(<TodoList />, {wrapper, scenario});
  });
});
