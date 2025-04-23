import { Button, StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#111827',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

        
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

   textScroll:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
   },

   button:{
    height: 85,
    width: 350,
    backgroundColor: '#1F2937',
    borderRadius: 25,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
   },
   Textbutton:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
   },

   textsecretaria:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
   }
})