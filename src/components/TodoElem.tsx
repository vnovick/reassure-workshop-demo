import React from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {Todo} from '../slices/todoSlice';

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
};

const TodoElem: React.FC<Props> = ({todo, onDelete}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{todo.text}</Text>
        <Text style={styles.date}>{new Date(todo.date).toDateString()}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => onDelete(todo.id)}
          title="Delete"
          testID="deleteTodo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  textContainer: {
    flex: 1, // Ensures the text takes up available space
  },
  text: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  buttonContainer: {
    width: 80, // Adjust as needed
  },
});

export default TodoElem;
