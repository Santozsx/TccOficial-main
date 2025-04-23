import { Button, StyleSheet } from "react-native"

export const styles = StyleSheet.create({


    container:{
        width:'100%',
        height: '100%',
        backgroundColor: '#111827',
        overflow: 'hidden',

              
    },

    container2:{
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flex: 1,
        marginBottom: 100,
        left: 30

    },

    gradient:{
        width: '100%',
        height:'30%',
        borderBottomStartRadius:20,
        borderBottomEndRadius:20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Ttitle:{
       fontSize: 30,
       fontWeight: 'bold',
       color: '#fff'
        
    },

    backarrow:{
        right: 160,
        bottom: 50,
        
        
    },

    bell:{
        left: 160,
        bottom: 95,
        
    },

    perfil:{
        backgroundColor:'#1F2937',
        borderRadius:25,
        width: 350,
        height: 150,
        marginBottom: 10,
         flexDirection:'row',
        alignItems: 'center'
        
    },
    

    concursos:{
        backgroundColor:'#1F2937',
        borderRadius:25,      
        width: 350,
        height: 150,
        marginBottom: 10,
         flexDirection:'row',
        alignItems: 'center'
       
    },

    vestibular:{
        backgroundColor:'#1F2937',
        borderRadius:25,      
        width: 350,
        height: 150,
        marginBottom: 10,
         flexDirection:'row',
        alignItems: 'center'
    
    },

    certificados:{
        backgroundColor:'#1F2937',
        borderRadius:25,
        width: 350,
        height: 150,
        marginBottom: 10,
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 20, // Adiciona um espaço interno
      
        
    },
    
    backicon:{
        backgroundColor: '#036672',
        borderRadius:10,
        width: 70,
        height:70,
        margin:30,
        alignItems:'center',
        justifyContent: 'center'
    },
    backiconCertificado:{
        backgroundColor: '#036672',
        borderRadius:10,
        width: 70,
        height:70,
        margin:30,
        alignItems:'center',
        justifyContent: 'center',
        left: -20
    },

    titulofont:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative'
    },

    tituloCertificado:{
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 25,
        marginBottom: 35,
        left: -38,
        top: 10

        
    },

    subtituloCertificado:{
        fontWeight:'bold',
        color:'#4C5562',
        fontSize:20,
        marginTop: -10,
        bottom: 20,
        left: -38
       
    },

    tituloVestibular:{
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 25,
        marginBottom: 35,
        right:10,
        top: 15

        
    },
    subtituloVestibular:{
        fontWeight:'bold',
        color:'#4C5562',
        fontSize:20,
        marginTop: -10,
        bottom: 15,
        left: -10
        
       
    },
    tituloConcurso:{
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 25,
        marginBottom: 35,
        left: -20,
        top: 10

        
    },
    
    subtituloConcurso:{
        fontWeight:'bold',
        color:'#4C5562',
        fontSize:20,
        marginTop: -10,
        bottom: 15,
        left: -20
        
       
    },
    tituloPerfil:{
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 25,
        marginBottom: 35,
        left: -20,
        top: 10

        
    },
    subtituloPerfil:{
        fontWeight:'bold',
        color:'#4C5562',
        fontSize:20,
        marginTop: -10,
        bottom: 15,
        left: -20
        
       
    },
})