import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function InputTodo({inputValue, setInputValue}) {
  return (
    <View>
      <TextInput
        placeholder="Введите задачу"
        value={inputValue}
        onChange={value => {
          setInputValue(value.nativeEvent.text);
        }}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#a5a5a5',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});
