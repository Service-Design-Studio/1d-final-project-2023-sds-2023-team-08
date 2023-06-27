import { StyleSheet } from 'react-native';

export const FTDetailsPageStyles = StyleSheet.create({

    bgbase: {
        flex:1, 
        flexDirection:'column',  
        alignItems: 'center', 
        paddingTop: 60,
    },
    
    money: {
        width: 300,
        flexDirection:'column',  
    },

    description: {
        width:300, 
        height: 300, 
        flexDirection:'column', 
        backgroundColor:'white', 
        marginTop: 100,
        paddingTop: 100, 
        paddingBottom: 20,
        paddingLeft: 20
    },

    sharebutton: {
        width: 300, 
        height: 30, 
        flexDirection:'column', 
        backgroundColor:'red', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop:400
    },

    raisebutton: {
        width: 300, 
        height: 30, 
        flexDirection:'column', 
        backgroundColor:'red', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 30
    }

});