import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function SettingsScreen() {
  return (
    <View>
      <Text accessibilityRole="header" style={styles.header}>
        Settings List
      </Text>
      <AddTodo />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
});
