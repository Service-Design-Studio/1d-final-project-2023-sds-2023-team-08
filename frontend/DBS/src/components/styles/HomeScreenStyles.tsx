import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: 'blue',
      },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 10,
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
    },
    alertbody:{
        paddingHorizontal: 10,
        backgroundColor: '#066DAF',
        marginTop:-55,        
    },
    textheader:{
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        color:'white',
        fontSize:22,
        marginLeft:5,
        marginBottom:2,
    },
    textbody:{
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
        color: 'white',
        fontSize: 15,
        marginLeft:7,
        letterSpacing:-0.8,
        marginBottom: -1,
    },
    alertbutton:{
        paddingHorizontal: 10,
        paddingTop:10,
        backgroundColor: '#066DAF',
        paddingBottom: 30,
    },
    buttonContainer:{
        backgroundColor: '#444444',
        borderRadius: 15,
        alignSelf: 'flex-end',
        paddingHorizontal: 14,
        paddingVertical:5,
        marginLeft: 10,
    },
    buttonText:{
        color:'white',
        fontFamily:"Lato-Regular",
        fontSize:12,
        fontWeight:'bold'
    },
    containertwo:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    text:{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#444444',
        marginTop:10,
        marginLeft:8,
    },
    setting:{
        resizeMode:'contain',
        width:20,
        height:20,
        marginLeft: 8,
        marginTop:15,
    },
    containerthree:{
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom: 20,
    },
    iconcontainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal:3,
    },
    icons: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        paddingHorizontal:40
    },
    shortcut: {
        flexShrink: 1,
        fontFamily: "Lato-Regular",
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 5,
        maxWidth: 90,
    },

    containerfour:{
        backgroundColor: "#EFEFEF",
    },
    recenttransaction:{
        backgroundColor:'white',
        marginVertical:20,
        flexDirection:'row',
    },
    recenttransactiontext:{
        fontFamily:'Lato-Regular',
        fontSize: 20,
        color: '#444444',
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingVertical: 15,        
    },
    expand:{
        resizeMode:'contain',
        width:20,
        height:15,
        marginLeft: 180,
        marginTop:20
    }
      
  });