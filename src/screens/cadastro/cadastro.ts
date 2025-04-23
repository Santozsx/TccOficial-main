import { Button, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    input:{
        height: 50,
        width:'80%',
        backgroundColor: '#1F2937',
        borderRadius: 25,
        margin: 5,
        marginBottom:10,
        color: '#fff',
        textAlign: 'left' ,
        textAlignVertical: "top"
      
      
     },container:{
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    gradient:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%'
    },
    title:{
        marginBottom: 100,
        textAlign: 'center',
        fontWeight: 'bold',
       marginTop:150,
        fontSize: 45,
        color: '#fff'

     },
     cadastrar:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderTopLeftRadius:25,
        width: '80%',
        height: 50,
        padding: 0,
        backgroundColor: '#4B8223',
        marginBottom: 75,
        fontSize:22
    },
    Text:{
        textAlign: 'center',
        color:'#fff'
    },
    
  
    
})
 