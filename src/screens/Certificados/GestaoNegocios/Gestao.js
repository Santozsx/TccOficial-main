import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Gestaostyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Gestao(){

    const navigation = useNavigation ();

    function NavegaCPA10 () {
        navigation.navigate('CPA10')
    }

    function NavegaPMP () {
        navigation.navigate('PMP')
    }

    function NavegaCPA20 () {
        navigation.navigate('CPA20')
    }

    function NavegaCFP () {
        navigation.navigate('CFP')
    }


    return(
        <View style={styles.container}>
        <LinearGradient
           locations={[0.1, 0.7]}
           colors={['#16BDCA', '#0B5E64']}
           style={styles.gradient}
       >


           <Text style={styles.Ttitle}>
               Gestão e Negocios
           </Text>

           <TouchableOpacity onPress={navigation.goBack}>
               <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
           </TouchableOpacity>

           <TouchableOpacity>
               <Icone name='bell-ring-outline' size={40} color={'#FFFFFF'} style={styles.bell} />
           </TouchableOpacity>


       </LinearGradient>

       <ScrollView>
           <TouchableOpacity style={styles.button}>
               <Text style={styles.Textbutton} onPress={NavegaPMP}>
                   PMP
               </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={NavegaCPA10}>
               <Text style={styles.Textbutton}>
                 CPA-10
               </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={NavegaCPA20}>
               <Text style={styles.Textbutton}>
                   CPA-20
               </Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button} onPress={NavegaCFP}>
               <Text style={styles.Textbutton}>
                   CFP
               </Text>
           </TouchableOpacity>

         </ScrollView>
       </View>
    )
}