import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Nivel1 = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [emailAluno, setEmailAluno] = useState('');

  const handleSubmit = () => {
    console.log(`Nome: ${nomeAluno}, Email: ${emailAluno}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do aluno"
        placeholderTextColor="#555"
        value={nomeAluno}
        onChangeText={setNomeAluno}
      />
      <TextInput
        style={styles.input}
        placeholder="Email do aluno"
        placeholderTextColor="#555"
        value={emailAluno}
        onChangeText={setEmailAluno}
        keyboardType="email-address"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
});

export default Nivel1;
