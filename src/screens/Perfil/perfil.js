import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './perfistylel';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

export default function Perfil(){

    const navigation = useNavigation();


    return(
        <LinearGradient
        locations={[0.4,0.7]}
        colors={['#16BDCA', '#111827']} 
        style={styles.gradient} 
        >
            
         <TouchableOpacity onPress={navigation.goBack}>
          <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
        </TouchableOpacity>

        <Image style={styles.logo} 
        source={ require('../../../img/saopaulo.png')}/>

        <Text style={styles.TextNome}>
            Nome
        </Text>
         
       <TextInput style={styles.input} placeholder='Email:'/>
        <TouchableOpacity style={styles.botton}>
            <Text style={styles.Text}>
                Senha
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botton}>
            <Text style={styles.Text}>
                Deletar Minha Conta
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botton}>
            <Text style={styles.Text}>
                Gerenciar Notificação
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botton}>
            <Text style={styles.textTermos}>
                Termos de Serviço
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botton}>
            <Text style={styles.textTermos}>
                Politica de Privacidade
            </Text>
        </TouchableOpacity>
        
        
      
           

        </LinearGradient>

    );
}