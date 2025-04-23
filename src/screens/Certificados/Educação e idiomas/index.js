import { View, Text,TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './indexstyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Educacao (){

    const navigation = useNavigation();

    function navegaEnem() {
        navigation.navigate('NavegaEnem')
    }

    function NavegaToefl() {
        navigation.navigate('navegaToefl')
    }

    function NavegaDele() {
        navigation.navigate('NavegaDele')
    }

    function NavegaDalf() {
        navigation.navigate('NavegaDalf')
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
                <TouchableOpacity style={styles.button} onPress={navegaEnem}>
                    <Text style={styles.Textbutton}>
                        Enem
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaToefl}>
                    <Text style={styles.Textbutton}>
                       Toefl/Ielts
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaDele}>
                    <Text style={styles.Textbutton}>
                        Dele
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaDalf}>
                    <Text style={styles.Textbutton}>
                        Dalf/Delf
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}