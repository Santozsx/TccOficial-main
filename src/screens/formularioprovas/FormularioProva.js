import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function QuestoesScreen() {
  const [questoes, setQuestoes] = useState([]);
  const [respostas, setRespostas] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        const response = await fetch('http://localhost:8080/questoes?ano=2024'); // Use IP real no celular
        const data = await response.json();
        setQuestoes(data);
      } catch (error) {
        console.error('Erro ao buscar questões:', error);
      }
    };

    fetchQuestoes();
  }, []);

 const selecionarResposta = (id, alternativa) => {
  setRespostas(prev => ({
    ...prev,
    [id]: alternativa
  }));
};

const enviarRespostas = () => {
  const totalRespondidas = Object.keys(respostas).length;

  if (totalRespondidas < questoes.length) {
    Alert.alert(
      'Responda todas as questões',
      `Você respondeu ${totalRespondidas} de ${questoes.length} questões.`
    );
    return;
  }

  let acertos = 0;

  const resultadoDetalhado = questoes.map((questao) => {
    const respostaUsuario = respostas[questao.id];
    const correta = questao.resposta;
    const acertou = respostaUsuario === correta;

    if (acertou) acertos++;

    return {
      numero: questao.numero,
      enunciado: questao.enunciado,
      respostaCorreta: correta,
      respostaUsuario,
      acertou,
    };
  });

  navigation.navigate('Resultado', {
    totalQuestoes: questoes.length,
    acertos,
    erros: questoes.length - acertos,
    detalhes: resultadoDetalhado,
  });
};


  const renderAlternativas = (item) =>
  item.alternativas.map((alt, index) => {
    const letra = alt.slice(0, 1);
    const texto = alt.slice(3);
    const selecionada = respostas[item.id] === letra;

    return (
      <TouchableOpacity
        key={index}
        style={styles.radioOption}
        onPress={() => selecionarResposta(item.id, letra)}
      >
        <RadioButton
          value={letra}
          status={selecionada ? 'checked' : 'unchecked'}
          onPress={() => selecionarResposta(item.id, letra)}
          color="#2e7d32"
        />
        <Text style={styles.alternativaTexto}>
          {`${letra}) ${texto}`}
        </Text>
      </TouchableOpacity>
    );
  });


return (
  <View style={styles.container}>
    <LinearGradient
      colors={['#0f2027', '#203a43', '#2c5364']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FlatList
          data={questoes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.questaoCard}>
              <Text style={styles.enunciado}>
                {`Questão ${item.numero}: ${item.enunciado}`}
              </Text>
              {renderAlternativas(item)}
            </View>
          )}
          scrollEnabled={false}
        />
      </ScrollView>

      <TouchableOpacity onPress={navigation.goBack}>
        <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.botaoEnviar,
          Object.keys(respostas).length < questoes.length && { backgroundColor: '#9e9e9e' }
        ]}
        onPress={enviarRespostas}
      >
        <Text style={styles.textoBotao}>Enviar Respostas</Text>
      </TouchableOpacity>

    </LinearGradient>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },

  gradient: {
    flex: 1,
    alignItems: 'center',

  },

  backarrow: {
    right: 140,
    bottom: 760,
    size: 50,
    position: 'absolute',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    top: 50
  },
  questaoCard: {
    backgroundColor: '#FFFFFF00',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  enunciado: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
    color: '#fff',
  },
  alternativaTexto: {
    fontSize: 15,
    color: '#fff',
    flexShrink: 1,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF00',
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
  },
  radioSelected: {
    backgroundColor: '#d0f0c0',
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
  },
});

