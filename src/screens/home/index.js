import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from './home';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Login from '../login/loginpage';



export default function Home(){

    const navigation = useNavigation();

    function navegaLogin(){
        navigation.navigate('Login')
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

            <TouchableOpacity style={styles.button} onPress={ navegaLogin} >
                <Icon name="arrow-right" size={30} color="#fff" />
            </TouchableOpacity>


        </LinearGradient>

    );
}

