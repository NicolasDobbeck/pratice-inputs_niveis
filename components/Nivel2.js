import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Nivel2 = () => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [emailAluno, setEmailAluno] = useState('');
  const [dados, setDados] = useState(null);

  const handleSubmit = () => {
    setDados({ nome: nomeAluno, email: emailAluno });
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
      <Button title="Exibir na Tela" onPress={handleSubmit} />
      {dados && (
        <View style={styles.result}>
          <Text>Nome: {dados.nome}</Text>
          <Text>Email: {dados.email}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#34A853',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  result: {
    marginTop: 20,
  },
});

export default Nivel2;
