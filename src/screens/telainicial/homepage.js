import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './homestyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import Icones from 'react-native-vector-icons/AntDesign'
import Certificado from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';





export default function Homepage() {

  const navigation = useNavigation();

  function navegaPerfil(){
    navigation.navigate('Perfil')
  }

  function navegaConcurso(){
    navigation.navigate('Concursos')
  }

  function navegaVestibular(){
    navigation.navigate('Vestibular')
  }

  function navegaCertificado(){
    navigation.navigate('Certificados')
  }

  return (

    <View style={styles.container}>


      <LinearGradient
        locations={[0.1, 0.7]}
        colors={['#16BDCA', '#0B5E64']}
        style={styles.gradient}

      >

        <Text style={styles.Ttitle}>
          SimuApp
        </Text>

        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icone name='bell-ring-outline' size={40} color={'#FFFFFF'} style={styles.bell} />
        </TouchableOpacity>

      </LinearGradient>

      <View style={styles.container2}>

        <TouchableOpacity onPress={navegaPerfil}>
          <View style={styles.perfil}>
            <View style={styles.backicon}>
              <Icones name='user' size={40} color={'#16BDCA'} />
            </View>
            <View styles={styles.titulofont}>
              <Text style={styles.tituloPerfil}>
                Perfil
              </Text>
              <Text style={styles.subtituloPerfil}>
                Acessar seu Perfil
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navegaConcurso}>
  
          <View style={styles.concursos} >
            <View style={styles.backicon}>
              <Icone name='briefcase-outline' size={40} color={'#16BDCA'} />
            </View>
  
            <View style={styles.titulofont}>
              <Text style={styles.tituloConcurso}>
                Concursos
              </Text>
  
              <Text style={styles.subtituloConcurso}>
                Área dos concursos
              </Text>
            </View>
          </View>
        </TouchableOpacity>



       
          <TouchableOpacity onPress={navegaVestibular}>

            <View style={styles.vestibular}>
              <View style={styles.backicon}>
                <Icones name='book' size={40} color={'#16BDCA'} />
              </View>
              <View style={styles.tituloVestibular}>
                <Text style={styles.tituloVestibular}>
                  Vestibular
                </Text>
                <Text style={styles.subtituloVestibular}>
                  Área dos vestibulares
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        





        <TouchableOpacity onPress={navegaCertificado}>
          <View style={styles.certificados}>
            <View style={styles.backiconCertificado}>
              <Certificado name='certificate' size={40} color={'#16BDCA'} />
            </View>
            <View style={styles.titulofont}>
              <Text style={styles.tituloCertificado}>
                Certificados
              </Text>
              <Text style={styles.subtituloCertificado}>
                Área de Certificados
              </Text>
            </View>
          </View>
        </TouchableOpacity>



      </View>




    </View>



  );
}
