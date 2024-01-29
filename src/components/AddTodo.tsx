import * as React from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TodosState, addTodo} from '../slices/todoSlice'; // Update this import to your todoSlice actions

export function AddTodo() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();
  const todoLength = useSelector<
    {
      todos: TodosState[];
    },
    number
  >(state => state.todos.length);

  const submitForm = () => {
    const todo = {
      id: todoLength + 1,
      text,
      date: new Date().toISOString(),
    };

    dispatch(addTodo(todo));
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter a text below to add a new todo</Text>
      <TextInput
        autoFocus
        value={text}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={submitForm}
        onChangeText={setText}
        placeholder="To Do"
      />
      <Button onPress={submitForm} title="Add Todos" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 156,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 2,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    paddingVertical: 8,
    width: '100%',
    textAlign: 'center',
    borderRadius: 4,
  },
});

export default AddTodo;
