import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
}

export type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<{id: number}>) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    modifyTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = {...state[index], ...action.payload};
      }
    },
    clearTodos: () => {
      return [];
    },
  },
});

export const {addTodo, removeTodo, modifyTodo, clearTodos} = todosSlice.actions;
export default todosSlice.reducer;
