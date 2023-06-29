import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const Windowheight = Dimensions.get('window').height
const WindowsWidth = Dimensions.get('window').width
export const homeScreenStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#066DAF',
      },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#066DAF',
        height: Windowheight*0.040,
        marginVertical:'3%',
    },
    leftcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex:1,
        paddingLeft: '3%',
    },
    rightcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex:1,
        paddingRight: '3%',

    },
    bell:{ 
        resizeMode:'contain',
        aspectRatio:1,
        height:'80%',
        marginLeft:'5%',
    },
    eye:{
        resizeMode:'contain',
        aspectRatio:1,
        height:'80%',
    },
    help:{      
        resizeMode:'contain',
        aspectRatio:1,
        height:'80%',
        marginLeft:'20%',
        alignSelf: 'center',
        marginTop:'1%'
    },
    logoutContainer:{
        backgroundColor: 'transparent',
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: '6%',
        paddingVertical:'4%',
    },
    logoutText:{
        fontFamily: 'Lato-Regular',
        fontWeight:'bold',
        color: 'white',
        marginHorizontal:4,
        fontSize:10,
        marginVertical:2,
        textAlign: 'center'
    },
    alertbody:{
        paddingHorizontal: '4%',
        backgroundColor: '#066DAF',
    },
    textheader:{
        fontFamily: 'Lato-Regular',
        fontWeight: '700',
        color:'white',
        fontSize:22,
        marginBottom:'2%',
    },
    textbody:{
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
        color: 'white',
        fontSize: 15,
        letterSpacing:-0.5,
    },
    alertbutton:{
        paddingHorizontal: '5%',
        paddingTop:'4%',
        backgroundColor: '#066DAF',
        paddingBottom: '6%',
    },
    buttonContainer:{
        backgroundColor: '#444444',
        borderRadius: 20,
        alignSelf: 'flex-end',
        paddingHorizontal: '5%',
        paddingVertical:'2%',
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
        alignContent: 'center',
        paddingHorizontal: '3%',
        paddingTop: '2%',
        backgroundColor: 'white',
    },
    text:{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#444444',
        marginTop:'2%',
        marginLeft:'2%',
    },
    setting:{
        resizeMode:'contain',
        height:'50%',
        marginTop:'3.5%',
        marginLeft: '-10%'
    },
    containerthree:{
        backgroundColor: 'white',
        paddingTop:'4%',
        paddingBottom: '5%',
        paddingLeft:'3%'
    },
    iconcontainer: {
        alignItems: "center",
        justifyContent: "center",
        width: WindowsWidth/5
    },
    icons: {
        width: 55,
        height: 55,
        resizeMode: "contain",
    },
    shortcut: {
        flexShrink: 1,
        fontFamily: "Lato-Regular",
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop:'12%',
    },
    containerfour:{
        backgroundColor: "#EFEFEF",
        paddingVertical:'4%'
    },
    recenttransaction:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingHorizontal: '2%',
    },
    recenttransactiontext:{
        fontFamily:'Lato-Regular',
        fontSize: 20,
        color: '#444444',
        fontWeight: 'bold',
        paddingVertical: '4%',
        paddingLeft: '4%'        
    },
    expand:{
        resizeMode:'contain',
        height:'25%',
        marginLeft: 'auto',
        marginTop: '2%' 
    }
      
  });