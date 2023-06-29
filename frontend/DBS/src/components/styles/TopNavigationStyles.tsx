import { StyleSheet } from 'react-native';

export const topNavigatorStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
    },
    header:{
        flexDirection:'row',
        paddingTop:'4%',
        alignContent: 'center',
        paddingRight: '1%'
    },
    blueline:{
        width:'0.7%',
        height:'80%',
        marginTop:'0.7%',
        marginHorizontal:'2.5%',
        backgroundColor:'#066DAF',
    },
    yellowline:{
        width:'0.7%',
        height:'80%',
        marginTop:'0.7%',
        marginHorizontal:'2.5%',
        backgroundColor:'#EBAA4E',
    },
    text:{
        fontFamily:'Lato-Regular',
        fontSize: 18,
        fontWeight:'bold',
        color:"#444444",
    },
    expand:{
        resizeMode:'contain',
        height:'60%',
        marginLeft: 'auto',
        marginTop: '1%'
    },
    expandrotated:{
        resizeMode:'contain',
        height:'60%',
        marginLeft: 'auto',
        marginTop: '1%',
        transform: [{rotate:'90deg'}]
    },
    expandrotated2:{
        resizeMode:'contain',
        height:'60%',
        marginLeft: 'auto',
        marginTop: '1%',
        transform: [{rotate:'-90deg'}]
    },
    containertwo:{
        paddingHorizontal:'5%',
        paddingBottom:'3%',
    },
    value:{
        fontFamily:'Lato-Regular',
        fontSize: 16,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign: 'right',
        paddingTop: '7%',
    },
    textcontainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',  
        justifyContent:'flex-end',
    },
    sgd:{
        fontFamily:'Lato-Regular',
        fontSize: 14,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign: 'right',
        paddingTop:'1.75%',
        
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
        width: '95%',
        alignSelf:'center',
        opacity: 0.4
    },
    insightscontainer:{
        backgroundColor: "#EFEFEF",
        marginBottom:'10%',
    },
    rectangle:{
        backgroundColor: 'white',
        width:'92%',
        alignSelf:'center',
        marginTop:'8%',
        borderRadius:7,
    },
    date:{
        fontFamily: 'Lato-Regular',
        fontSize: 10,
        fontWeight: 'bold',
        color: "#444444",
        paddingHorizontal:'4%',
        paddingTop:'4%',
        paddingBottom:'1%'
    },
    title:{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#444444",
        paddingLeft:'3.5%',
        maxWidth: '65%',

    },
    body:{
        fontFamily: 'Lato-Regular',
        fontSize: 13,
        fontWeight: 'normal',
        color: "#444444",
        paddingLeft:'4%',
        maxWidth: '65%',
        paddingTop:3,
        paddingBottom: 30,
    }
  });