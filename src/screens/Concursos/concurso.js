import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './concursostyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';


export default function Concursos() {

    const navigation = useNavigation();


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


            <ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Policia Cívil de São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Policia Militar de São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Prefeitura de São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Tribunal de Justiça de São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Ministério Público de São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Sefaz São Paulo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textsecretaria}>
                    Secretaria Estadual de Educação de São Paulo 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Banco do Brasil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        Caixa Ecônomica 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>
                        INSS
                    </Text>
                </TouchableOpacity>


            </ScrollView>
        </View>

    )
}