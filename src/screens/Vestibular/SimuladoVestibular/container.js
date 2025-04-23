import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { styles } from './containerstyle';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import Icone from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Container() {
    const years = Array.from({ length: 16 }, (_, i) => 2024 - i);

    const YearsGrid = () => {
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

                <TouchableOpacity>
                    <Icon name='arrow-back-circle-outline' size={50} color={'#fff'} style={styles.backarrow} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icone name='bell-ring-outline' size={40} color={'#FFFFFF'} style={styles.bell} />
                </TouchableOpacity>


            </LinearGradient>

            <Text style={styles.Text2}>
                Selecione o Ano
            </Text>

            <YearsGrid />


            <TouchableOpacity style={styles.buttonrealizar}>
                <Text style={styles.textrealizar}>
                    Realizar Simulado 
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttongerar}>
                <Text style={styles.textgerar}>
                    Realizar Simulado 
                </Text>
            </TouchableOpacity>
        </View>
    );
}

   
