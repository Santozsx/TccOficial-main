import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './loginstyle';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import cadastro from '../cadastro/cadastropage';
import homepage from '../telainicial/homepage'



export default function Login(){

   const navigation = useNavigation();

   function navegaCadastro(){
      navigation.navigate('Cadastro')
  }

  function navegaHome(){
   navigation.navigate('Homepage')
}
   

    return(
        <LinearGradient
        locations={[0.4,0.7]}
        colors={['#16BDCA', '#111827']} 
        style={styles.gradient} 
        >
         <View style={styles.container}>
             <Text style={styles.title}>SimuApp</Text>
         </View>

            <View style={styles.container}>

                <TextInput style={styles.input}/>
                <Icon style={styles.iconuser} name='user' size={25} color='#fff'/>

                <TextInput style={styles.input} />
                <Icon style={styles.iconmail} name='mail' size={25} color='#fff'/>
                
               
                <TextInput style={styles.input} />
                <Icon style={styles.iconlock} name='lock' size={25} color='#fff'/>
                    
            </View>

                 <TouchableOpacity style={styles.boton} placeholder='Login' onPress={navegaHome}>
                    <Text style={styles.text}> login</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.boton} placeholder='Cadastrar-se' onPress={ navegaCadastro}>
                    <Text style={styles.text}>Cadastrar-se</Text>
                 </TouchableOpacity>
            
                 <TouchableOpacity style={styles.google} placeholder='Login com o Google' color='black' >
                    <Text style={styles.text2}>Login com o Google</Text>
                    <Icon style={styles.icongoogle} name= 'google' size={25} color='black'/>
                 </TouchableOpacity>


                 <TouchableOpacity style={styles.facebook} placeholder='Login com o Facebook'>
                    <Text style={styles.text2}>Login com o Facebook</Text>
                    <Icon style={styles.icongoogle} name= 'facebook-square' size={25} color='black'/>
                 </TouchableOpacity>
            

        </LinearGradient>

    );
}
