import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
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
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 200,
        fontSize: 45,
        color: '#fff'

     },

     input:{
        height: 50,
        width: '80%',
        backgroundColor: '#1F2937',
        borderRadius: 25,
        margin: 5,
        color: '#fff',
        paddingLeft: 50
        
     },

     boton:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderTopLeftRadius:25,
        width: '80%',
        margin: 15,
        height: 50,
        backgroundColor: '#4B8223',
     },
     

    login:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderTopLeftRadius:25,
        width: '80%',
        height: 50,
        padding: 0,
        backgroundColor: '#4B8223',
        marginBottom: 22,
        fontSize:22,
        textAlign: 'center',
        
        
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
        marginBottom: 22,
        fontSize:22
    },
    google:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderTopLeftRadius:25,
        width: '80%',
        height: 50,
        padding: 0,
        backgroundColor: '#FFF',
        color: 'black',
        margin: 20,
        marginBottom: 22,
        fontSize:22

    },
    facebook:{
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        borderTopLeftRadius:25,
        width: '80%',
        height: 50,
        padding: 0,
        backgroundColor: '#FFF',
        color: 'black',
        marginBottom: 100,
        fontSize:22
    },
    iconuser:{
        flex:  1,
        position: 'absolute',
        left: 55,
        top: 50,
        alignContent: 'center',
        
    },
    iconmail:{
        flex:  1,
        position:  'absolute',
        left: 55,
        marginRight: 10,
        alignContent: 'center',
        alignItems: 'center',
   
    },
    iconlock:{
        flex:  1,
        position:  'absolute',
        left: 55,
        bottom: 50,
        alignContent: 'center',
        alignItems: 'center',
   
    },
    icongoogle:{
        alignContent:'center',
        alignItems: 'center',
        position:  'absolute',
        left: 10
    },
    iconfacebook:{
        alignContent:'center',
        alignItems: 'center',
        position:  'absolute',
        left: 10
    },
    text:{
        textAlign:'center',
        fontSize: 20,
        color: '#fff'
    },
    text2:{
        textAlign:'center',
        fontSize: 20,
        
    }
})