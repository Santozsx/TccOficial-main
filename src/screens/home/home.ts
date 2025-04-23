import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
         
     },  
    title:{
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 250,
        fontSize: 45,
        color: '#fff'
     },
    gradient:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    button: {
        backgroundColor: '#111827', // Cor de fundo do botão
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        width: 100,
        height:100,
        paddingBlockStart: 50,
        borderRadius: 55, // Faz o botão redondo
        marginBottom: 200, // Espaçamento inferior
      },
   

})