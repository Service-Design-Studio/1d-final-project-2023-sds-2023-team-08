import { StyleSheet } from 'react-native';

export const topNavigatorStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
    },
    header:{
        flexDirection:'row',
        paddingTop:10,
    },
    blueline:{
        width:3,
        height:'80%',
        marginTop:4,
        marginHorizontal:10,
        backgroundColor:'#066DAF',
    },
    yellowline:{
        width:3,
        height:'80%',
        marginTop:4,
        marginHorizontal:10,
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
        width:20,
        height:15,
        marginLeft: 225,
        marginTop:8
    },
    expandrotated:{
        resizeMode:'contain',
        width:20,
        height:15,
        marginLeft: 270,
        marginTop:8,
        transform: [{rotate:'90deg'}]
    },
    containertwo:{
        paddingHorizontal:20,
        paddingBottom:10,
    },
    value:{
        fontFamily:'Lato-Regular',
        fontSize: 16,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign: 'right',
        paddingTop: 20,
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
        width: '95%',
        alignSelf:'center',
        opacity: 0.4
    },
    insightscontainer:{
        backgroundColor: "#EFEFEF",
        marginBottom:20,
    },
    rectangle:{
        backgroundColor: 'white',
        width:'92%',
        alignSelf:'center',
        marginTop:25,
        borderRadius:7,
    },
    date:{
        fontFamily: 'Lato-Regular',
        fontSize: 10,
        fontWeight: 'bold',
        color: "#444444",
        paddingHorizontal:12,
        paddingTop:12,
        paddingBottom:2
    },
    title:{
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        fontWeight: 'bold',
        color: "#444444",
        paddingLeft:12,
        maxWidth: '65%',

    },
    body:{
        fontFamily: 'Lato-Regular',
        fontSize: 13,
        fontWeight: 'normal',
        color: "#444444",
        paddingLeft:12,
        maxWidth: '65%',
        paddingTop:3,
        paddingBottom: 30,
    }
  });