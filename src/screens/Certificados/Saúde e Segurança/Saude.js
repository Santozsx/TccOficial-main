import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Saudestyle';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Saude() {

    const navigation = useNavigation();

    function NavegaNR10() {
        navigation.navigate('NR10')
    }

    function NavegaNR12() {
        navigation.navigate('NR12')
    }

    function NavegaNR35() {
        navigation.navigate('NR35')
    }

    function NavegaBLS_ACLS() {
        navigation.navigate('BLS_ACLS')
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

            <ScrollView>
                <TouchableOpacity style={styles.button} onPress={NavegaNR10}>
                    <Text style={styles.Textbutton}>
                        NR-10
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaNR12}>
                    <Text style={styles.Textbutton}>
                        NR-12
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaNR35}>
                    <Text style={styles.Textbutton}>
                        NR-35
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={NavegaBLS_ACLS}>
                    <Text style={styles.Textbutton}>
                        BLS/ACLS
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}