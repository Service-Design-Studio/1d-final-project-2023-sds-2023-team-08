import { StyleSheet } from 'react-native';

export const accountDetailsStyles = StyleSheet.create({
    account:{
        backgroundColor:'white',
        paddingTop:'4%',
    },
    accountheader:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingBottom:'1%'
    },
    accountname:{
        fontFamily:'Lato-Regular',
        fontSize: 18,
        fontWeight:'bold',
        color:"#444444",
        paddingLeft:'5%',
    },
    accountexpand:{
        resizeMode:'contain',
        height:'60%',
        marginLeft: 'auto',
        marginTop: '2%'
    },
    accountnumber:{
        fontFamily:'Lato-Regular',
        fontSize: 16,
        fontWeight:'bold',
        color:"#A3A3A3",
        paddingLeft:'5%',
        paddingBottom: '10%',
    },
    textcontainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',  
        justifyContent:'flex-end',
        paddingBottom:'3%',
        paddingRight:'5%'
    },
    sgd:{
        fontFamily:'Lato-Regular',
        fontSize: 14,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign:'right',
        paddingTop:'2%',
        
    },
    money:{
        fontFamily:'Lato-Regular',
        fontSize: 20,
        fontWeight:'bold',
        color:"#444444",
        textAlign: 'right',
        paddingLeft: '1%', 
    },
    line:{
        borderBottomColor: '#A3A3A3',
        borderBottomWidth: 1,
        width: '94%',
        alignSelf:'center',
        opacity: 0.4
    },
});


