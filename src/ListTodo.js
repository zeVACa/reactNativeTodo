import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';

export default function ListTodo({todos}) {
  return (
    <ScrollView style={styles.list}>
      {todos.length ? (
        todos.map(todo => <Text style={styles.todoItem}>{todo.title}</Text>)
      ) : (
        <Text>Пока нет задач</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#e5e5e5',
  },
  list: {
    marginTop: 16,
  },
});
