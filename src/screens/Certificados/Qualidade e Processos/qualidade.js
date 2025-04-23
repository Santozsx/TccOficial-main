import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './qualidadestyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Qualidade (){

    const navigation = useNavigation();

    function NavegaISO_9001(){
        navigation.navigate('ISO_9001')
    }

    function NavegaISO_14001(){
        navigation.navigate('ISO_14001')
    }

    function NavegaLean_Six_Sigma(){
        navigation.navigate('Lean_Six_Sigma')
    }

    return(
        <View style={styles.container}>
             <LinearGradient
                locations={[0.1, 0.7]}
                colors={['#16BDCA', '#0B5E64']}
                style={styles.gradient}
            >


                <Text style={styles.Ttitle}>
                    Simuapp
                </Text>

                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icone name='bell-ring-outline' size={40} color={'#FFFFFF'} style={styles.bell} />
                </TouchableOpacity>


            </LinearGradient>

            <ScrollView>
                <TouchableOpacity style={styles.button} onPress={NavegaISO_9001}>
                    <Text style={styles.Textbutton}>
                       ISO 9001
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaISO_14001}>
                    <Text style={styles.Textbutton}>
                       ISO 14001
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaLean_Six_Sigma}> 
                    <Text style={styles.Textbutton}>
                       Lean Six Sigma
                    </Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}