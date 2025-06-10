import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const API_URL = 'http://localhost:8080'; // Substitua pelo seu IP local

const FormularioProva = ({ route }) => {
  const [questoes, setQuestoes] = useState([]);
  const [respostas, setRespostas] = useState({});
  const { ano = 2024, usuarioId = 1, nomeProva = 'ENEM 2024 - Azul' } = route.params || {};

  useEffect(() => {
    axios.get(`${API_URL}/api/questoes/${ano}`)
      .then(response => setQuestoes(response.data))
      .catch(error => {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível carregar as questões.');
      });
  }, []);

  const selecionarResposta = (questaoId, letra) => {
    setRespostas({ ...respostas, [questaoId]: letra });
  };

  const enviarRespostas = () => {
    axios.post(`${API_URL}/api/respostas`, {
      usuarioId,
      ano,
      nomeProva,
      respostas
    })
    .then(() => {
      Alert.alert('Sucesso', 'Respostas enviadas com sucesso!');
    })
    .catch(error => {
      console.error(error);
      Alert.alert('Erro', 'Falha ao enviar respostas.');
    });
  };

  const renderAlternativas = (questao) => {
    return questao.alternativas.map(alt => (
      <TouchableOpacity
        key={`${questao.id}-${alt.letra}`} // <-- key única corrigida aqui
        style={[
          styles.radioOption,
          respostas[questao.id] === alt.letra && styles.radioSelected
        ]}
        onPress={() => selecionarResposta(questao.id, alt.letra)}
      >
        <Text style={styles.alternativaTexto}>
          {alt.letra}) {alt.texto}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FlatList
          data={questoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.questaoCard}>
              <Text style={styles.enunciado}>{item.numero}. {item.enunciado}</Text>
              {renderAlternativas(item)}
            </View>
          )}
        />
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarRespostas}>
          <Text style={styles.textoBotao}>Enviar Respostas</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  questaoCard: {
    backgroundColor: '#FFFFFF ',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  enunciado: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
  },
  alternativaTexto: {
    fontSize: 14,
    color: '#333',
  },
  radioOption: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 4,
  },
  radioSelected: {
    backgroundColor: '#c8e6c9',
    borderColor: '#2e7d32',
  },
  botaoEnviar: {
    marginTop: 20,
    backgroundColor: '#4caf50',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default FormularioProva;
