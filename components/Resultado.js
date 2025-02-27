import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resultado = ({ nome, email }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>Email: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    backgroundColor: '#E8F5E9',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Resultado;
