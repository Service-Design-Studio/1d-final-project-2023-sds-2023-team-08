import { StyleSheet } from 'react-native';

export const accountDetailsStyles = StyleSheet.create({
    account:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:15,
    },
    accountheader:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingBottom:5
    },
    accountname:{
        fontFamily:'Lato-Regular',
        fontSize: 18,
        fontWeight:'bold',
        color:"#444444",
        paddingLeft:5,
        MarginTop:-5,
    },
    accountexpand:{
        resizeMode:'contain',
        width:20,
        height:15,
        alignSelf: 'flex-end',
    },
    accountnumber:{
        fontFamily:'Lato-Regular',
        fontSize: 16,
        fontWeight:'bold',
        color:"#A3A3A3",
        paddingLeft:5,
        paddingBottom: 30,
    },
    textcontainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',  
        justifyContent:'flex-end',
        paddingBottom:15,
    },
    sgd:{
        fontFamily:'Lato-Regular',
        fontSize: 14,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign: 'right',
        paddingTop:6,
        
    },
    money:{
        fontFamily:'Lato-Regular',
        fontSize: 20,
        fontWeight:'bold',
        color:"#444444",
        textAlign: 'right',
        paddingLeft: 5, 
    },
    line:{
        borderBottomColor: '#A3A3A3',
        borderBottomWidth: 1,
        width: '104%',
        alignSelf:'center',
        opacity: 0.4
    },
});


