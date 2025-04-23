import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './certificadostyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Certificado () {

    const navigation = useNavigation();

    
  function navegaEducacao(){
    navigation.navigate('Educacao')
  }

  
  function navegaGestao(){
    navigation.navigate('Gestao')
  }

  
  function navegaQualidade(){
    navigation.navigate('Qualidade')
  }

  
  function navegaSaude(){
    navigation.navigate('Saude')
  }

  
  function navegaSustentabilidade(){
    navigation.navigate('Sustentabilidade')
  }

  
  function navegaTecnologia(){
    navigation.navigate('Tecnologia')
  }

    return (
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

            <ScrollView >
                <TouchableOpacity style={styles.button} onPress={navegaEducacao}>
                    <Text style={styles.Textbutton}>
                        Educação e Idiomas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaTecnologia}>
                    <Text style={styles.Textbutton}>
                       Tecnologia
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaQualidade}>
                    <Text style={styles.Textbutton}>
                        Qualidade e Processos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaSustentabilidade}>
                    <Text style={styles.Textbutton}>
                       Sustentabilidade
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaGestao}>
                    <Text style={styles.Textbutton}>
                        Gestão e Negócios 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={navegaSaude}>
                    <Text style={styles.Textbutton}>
                        Saúde e Segurança
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}


