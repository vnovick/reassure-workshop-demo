import {configureStore} from '@reduxjs/toolkit';
import todosReducer, {TodosState} from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default function makeStore(initialState) {
  return configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: initialState,
  });
}
