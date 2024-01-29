//TODO improve performance
import React from 'react';
// import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TodosState, removeTodo} from '../slices/todoSlice'; // Ensure this is the correct path
import TodoElem from './TodoElem';

export function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: {todos: TodosState[]}) => state.todos);

  const onDeleteTodo = (id: number) => {
    dispatch(
      removeTodo({
        id,
      }),
    );
  };

  return todos.map((todo: any) => (
    <TodoElem todo={todo} onDelete={onDeleteTodo} />
  ));
  //   return (
  //     <FlatList
  //       data={todos}
  //       keyExtractor={todo => todo.id.toString()}
  //       renderItem={({item}) => <TodoElem todo={item} onDelete={onDeleteTodo} />}
  //     />
  //   );
}

export default TodoList;
