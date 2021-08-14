import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textBrand}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#E91E63',
  },
  textBrand: {
    fontSize: 22,
    color: '#fff',
  },
});
