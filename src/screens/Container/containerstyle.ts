import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
  
  
  export const styles = StyleSheet.create({
    container:{
      width: '100%',
      height: '100%',
      backgroundColor: '#111827',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      
      },
      button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 20, // Arredondado
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: "center",
        height: 50,
      
      },
      text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      gradient:{
        width: '100%',
        height: '20%',
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    Ttitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',  
      textAlign: 'center',
      top: 54

  },
  
  backarrow:{
      right: 160,
      bottom: 50,
      top:15
  },

  bell:{
  left: 160,
  bottom: 95,
  top: -35
  },

  Text2:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10
  },

  flatlist:{
    width: '100%',
    height: 100,
    alignContent: 'center',
    textAlign: 'center',
    left: 15 
  },



  buttonrealizar: {
    width: '80%',
    height: '9%',
    backgroundColor: '#1F2937',
    borderRadius: 25,
    margin: 5,
    marginBottom:10,
    color: '#fff',
    textAlign: 'center' ,
    textAlignVertical: "top",
    justifyContent: 'center',

    },

    textrealizar: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center' ,
        textAlignVertical: "top",
        justifyContent: 'center',
        
    },

    buttongerar: {
      width: '80%',
      height: '9%',
      backgroundColor: '#1F2937',
      borderRadius: 25,
      margin: 5,
      marginBottom:10,
      color: '#fff',
      textAlign: 'center' ,
      textAlignVertical: "top",
      justifyContent: 'center',
  
      },
  
      textgerar: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center' ,
          textAlignVertical: "top",
          justifyContent: 'center',
          
      },

      viewPicker: {
        width: 150,
        height: 100,
        backgroundColor: '#111827',
        bottom: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
      
      },

      pickerContainer:{
        width: 155,
        height: 75,
        backgroundColor: '#1F2937',
        bottom: 85,
        overflow: 'hidden',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12.5
      },


      pickerWrapper: {
        borderWidth: 2,
        borderColor: '#FFF', // Cor da borda
        borderRadius: 20, // Bordas arredondadas
        overflow: 'hidden', // Garante que o Picker fique dentro da borda
        backgroundColor: '#333', // Define um fundo escuro para harmonizar
      },
  });


    
    