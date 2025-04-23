import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Containerstyle2';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Microsoft (Title, children){

    const navigation = useNavigation();

    function navegaAi_900 () {    
        navigation.navigate('AI_900')
    }

    function navegaAZ_900 () {    
        navigation.navigate('AZ_900')
    }   

    function navegaDP_900 () {    
        navigation.navigate('DP_900')
    }   

    function navegaPL_900 () {    
        navigation.navigate('PL_900')
    }   

    function navegaSC_900 () {    
        navigation.navigate('SC_900')
    }   

    function navegaMS_900 () {    
        navigation.navigate('MS_900')
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
                <TouchableOpacity style={styles.button} onPress={navegaAZ_900}>
                    <Text style={styles.Textbutton}>
                    AZ-900
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaDP_900}>
                    <Text style={styles.Textbutton}>
                    DP-900
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaAi_900}> 
                    <Text style={styles.Textbutton}>
                    AI-900
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaSC_900}>
                    <Text style={styles.Textbutton}>
                    SC-900
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaPL_900}>
                    <Text style={styles.Textbutton}>
                    PL-900
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navegaMS_900}>
                    <Text style={styles.Textbutton}>
                    MS-900                    
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}