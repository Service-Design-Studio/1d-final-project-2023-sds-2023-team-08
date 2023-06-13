import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#066DAF',
    },
    bell:{ 
        marginRight: 10, 
        resizeMode:'contain',
        height:24,
        marginLeft:-40,
    },
    eye:{
        marginRight: 10, 
        resizeMode:'contain',
        width:24,
        marginLeft:-40,
        marginTop:-30,
    },
    help:{        
        marginRight:2, 
        resizeMode:'contain',
        width:24,
        marginLeft:200,
        marginTop:-60,
    },
    logoutContainer:{
        backgroundColor: 'transparent',
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical:2,
        marginTop:3,
        marginLeft: 10,

    },
    logoutText:{
        fontFamily: 'Lato-Regular',
        fontWeight:'bold',
        color: 'white',
        marginHorizontal:4,
        fontSize:10,
        marginVertical:2,
    }
  });