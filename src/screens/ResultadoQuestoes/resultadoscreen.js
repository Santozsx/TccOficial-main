import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ResultadoScreen({ route }) {
  const { totalQuestoes, acertos, erros, detalhes } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resultado</Text>
      <Text style={styles.resumo}>Acertos: {acertos} / {totalQuestoes}</Text>
      <Text style={styles.resumo}>Erros: {erros}</Text>

      <FlatList
        data={detalhes}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, item.acertou ? styles.correta : styles.errada]}>
            <Text style={styles.questaoNum}>Questão {item.numero}</Text>
            <Text>Enunciado: {item.enunciado}</Text>
            <Text>Sua resposta: {item.respostaUsuario || 'Não respondeu'}</Text>
            <Text>Correta: {item.respostaCorreta}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  resumo: { fontSize: 18, marginBottom: 8 },
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  correta: { backgroundColor: '#c8e6c9' },
  errada: { backgroundColor: '#ffcdd2' },
  questaoNum: { fontWeight: 'bold' },
});
