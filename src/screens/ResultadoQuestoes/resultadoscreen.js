import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ResultadoScreen({ route }) {
  const { totalQuestoes, acertos, erros, detalhes } = route.params;

  const porcentagem = ((acertos / totalQuestoes) * 100).toFixed(1);

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      style={styles.container}
    >
      <Text style={styles.header}>Resultado</Text>
      <Text style={styles.resumo}>✅ Acertos: {acertos} / {totalQuestoes}</Text>
      <Text style={styles.resumo}>❌ Erros: {erros}</Text>
      <Text style={styles.porcentagem}>🎯 Aproveitamento: {porcentagem}%</Text>

      <FlatList
        data={detalhes}
        keyExtractor={(item) => item.numero.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => (
          <View style={[styles.card, item.acertou ? styles.correta : styles.errada]}>
            <Text style={styles.questaoNum}>
              Questão {item.numero}{' '}
              <Icon
                name={item.acertou ? 'checkmark-circle-outline' : 'close-circle-outline'}
                size={20}
                color={item.acertou ? '#81c784' : '#e57373'}
              />
            </Text>
            <Text style={styles.texto}>Enunciado: {item.enunciado}</Text>
            <Text style={styles.texto}>Sua resposta: {item.respostaUsuario || 'Não respondeu'}</Text>
            <Text style={styles.texto}>Correta: {item.respostaCorreta}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  resumo: {
    fontSize: 18,
    marginBottom: 4,
    color: '#fff',
    textAlign: 'center',
  },
  porcentagem: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 2,
  },
  correta: {
    borderColor: '#81c784',
  },
  errada: {
    borderColor: '#e57373',
  },
  questaoNum: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#fff',
  },
  texto: {
    color: '#fff',
    marginBottom: 4,
  },
});
