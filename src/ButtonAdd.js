import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

export default function ButtonAdd({setTodos, inputValue, setInputValue}) {
  const addTodo = title => {
    const newTodo = {title: inputValue, id: Date.now()};

    if (title) {
      setInputValue('');
      setTodos(prevTodos => [...prevTodos, newTodo]);
    } else {
      Alert.alert('Ошибка: введите текст');
    }
  };

  return (
    <View>
      <Button title="Добавить задачу" onPress={() => addTodo(inputValue)} />
    </View>
  );
}

const styles = StyleSheet.create({});
