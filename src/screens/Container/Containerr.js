import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './containerstyle';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';




export default function Layout({ Title, children }) {
    const YearsGrid = () => {
        const years = Array.from({ length: 16 }, (_, i) => 2025 - i);
        return (
            <FlatList
                style={styles.flatlist}
                data={years}
                numColumns={4}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        );
    };

    const navigation = useNavigation();

    const [SelectedOption, setSelectedOption] = useState("");

    return (


        <View style={styles.container}>
            <LinearGradient
                locations={[0.1, 0.7]}
                colors={['#16BDCA', '#0B5E64']}
                style={styles.gradient}
            >

                <Text style={styles.Ttitle}>
                    {Title}
                </Text>

                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icone name='bell-ring-outline' size={40} color={'#FFFFFF'} style={styles.bell} />
                </TouchableOpacity>


            </LinearGradient>

            <Text style={styles.Text2}>
                Selecione o Ano
            </Text>

            {children}

            <YearsGrid />

            <View style={styles.viewPicker}>

                    <View style={styles.pickerWrapper}>
                        <Picker
                            style={styles.pickerContainer}
                            mode='dropdown'
                            dropdownIconColor={'#fff'}
                            selectedValue={SelectedOption}
                            onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)
                            }>
                            <Picker.Item label="Selecione a Disciplina" value="" style={styles.pickerText}  fontcolor={'#fff'} />
                            <Picker.Item label="Exatas" value="1" style={styles.pickerText} fontcolor={'#fff'} />
                            <Picker.Item label="Humanas" value="2" style={styles.pickerText}fontcolor={'#fff'}  />
                        
                        </Picker>
                    </View>
            </View>

            <TouchableOpacity style={styles.buttonrealizar}>
                <Text style={styles.textrealizar}>
                    Realizar Simulado
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttongerar}>
                <Text style={styles.textgerar}>
                    Gerar Simulado
                </Text>
            </TouchableOpacity>
        </View>
    );

}

