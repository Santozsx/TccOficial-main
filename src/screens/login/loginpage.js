import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './loginstyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../../../ipconfig/ipconfig';



export default function Login() {

   const navigation = useNavigation();

   function navegaCadastro() {
      navigation.navigate('Cadastro')
   }

   function navegaHome() {
      navigation.navigate('Homepage')
   }



   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [mensagem, setMensagem] = useState('');

   const handleLogin = async () => {
      try {
         const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            senha
         });

         setMensagem(response.data.mensagem); // exemplo: 'Login bem sucedido'
         console.log(response.data); // aqui pode vir token, nome, etc.

         Alert.alert('Sucesso', 'Login bem sucedido');
         navigation.navigate('Homepage');

         //aqui voce pode redirecionar ou salvar o token, se tiver
      } catch (error) {
         if (error.response) {
            setMensagem(error.response.data.erro); //mensagem do backend
         } else {
            setMensagem('Erro na conexão com o servidor');
            console.log(error);
         }
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

            <TextInput style={styles.input}/>
            <Icon style={styles.iconuser} name='user' size={25} color='#fff' />

            <TextInput style={styles.input} 
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"/>
            <Icon style={styles.iconmail} name='mail' size={25} color='#fff' />


            <TextInput style={styles.input} 
             placeholder="Senha"
             value={senha}
             onChangeText={setSenha}
             secureTextEntry/>
            <Icon style={styles.iconlock} name='lock' size={25} color='#fff' />

         </View>

         <TouchableOpacity style={styles.boton} placeholder='Login' onPress={handleLogin}>
             {mensagem?<Text style={styles.text}> {mensagem} </Text>: <Text style={styles.text}>Login</Text>}
         </TouchableOpacity>

         <TouchableOpacity style={styles.boton} placeholder='Cadastrar-se' onPress={navegaCadastro}>
            <Text style={styles.text}>Cadastrar-se</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.google} placeholder='Login com o Google' color='black' >
            <Text style={styles.text2}>Login com o Google</Text>
            <Icon style={styles.icongoogle} name='google' size={25} color='black' />
         </TouchableOpacity>


         <TouchableOpacity style={styles.facebook} placeholder='Login com o Facebook'>
            <Text style={styles.text2}>Login com o Facebook</Text>
            <Icon style={styles.icongoogle} name='facebook-square' size={25} color='black' />
         </TouchableOpacity>


      </LinearGradient>

   );
}
