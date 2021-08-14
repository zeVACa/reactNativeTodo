import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import Header from './src/Header';
import InputTodo from './src/InputTodo';
import ButtonAdd from './src/ButtonAdd';
import ListTodo from './src/ListTodo';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <InputTodo inputValue={inputValue} setInputValue={setInputValue} />
          <ButtonAdd
            setTodos={setTodos}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ListTodo todos={todos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default App;
