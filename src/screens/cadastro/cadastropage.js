import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './cadastro';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../ipconfig/ipconfig';

export default function cadastro() {
  const navigation = useNavigation();

  function navegaLogin() {
    navigation.navigate('Login');
  }

  // Estados dos inputs
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarsenha, setConfirmarsenha] = useState('');

  // Função de cadastro
  const handleRegister = async () => {
    if (!nome || !sobrenome || !email || !senha || !confirmarsenha) {
      Alert.alert('Erro', 'Preencha todos os Campos.');
      return;
    }

    if (senha !== confirmarsenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    if(senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um Email válido.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        nome,
        sobrenome,
        email,
        senha
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Erro ao cadastrar. Tente novamente.');
    }
    
  };

  return (
    <LinearGradient 
      locations={[0.4, 0.7]}
      colors={['#16BDCA', '#111827']} 
      style={styles.gradient}
    >   
      <View style={styles.container}>
        <Text style={styles.title}>SimuApp</Text>
      </View>

      <View style={styles.container}>
        <TextInput 
          style={[styles.input, { paddingLeft: 15 }]} 
          placeholder='Nome:'
          value={nome}
          onChangeText={setNome}
        />

        <TextInput 
          style={[styles.input, { paddingLeft: 15 }]} 
          placeholder='Sobrenome:'
          value={sobrenome}
          onChangeText={setSobrenome}
        />

        <TextInput 
          style={[styles.input, { paddingLeft: 15 }]} 
          placeholder='Email:'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          keyboardType='email-address'
        />

        <TextInput 
          style={[styles.input, { paddingLeft: 15 }]} 
          placeholder='Senha:'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput 
          style={[styles.input, { paddingLeft: 15 }]} 
          placeholder='Confirmar Senha:'
          value={confirmarsenha}
          onChangeText={setConfirmarsenha}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.cadastrar} onPress={handleRegister}>
        <Text style={styles.Text}>Cadastrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
