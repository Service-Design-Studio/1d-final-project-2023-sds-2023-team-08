import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const WindowsWidth = Dimensions.get('window').width 

export const recentTransactionStyles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingVertical:"4%",
        width:WindowsWidth
    },
    border:{
        width:WindowsWidth*0.3
    },
    back: {
        resizeMode: 'contain',
        flex:1
    },
    headertext: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#444444',
        width:WindowsWidth*0.65,
        textAlign:'center',
        marginLeft:'-10%'
    },
    filtercontainer:{
        backgroundColor: "#F6F6F6",
        paddingVertical:15,
        flexDirection: 'row',
        borderTopColor:"#D2D2D2",
        borderBottomColor: "#D2D2D2",
        borderTopWidth:1,
        borderBottomWidth:1,
    },
    filterrectangleunselected:{
        borderColor: "#D2D2D2",
        borderWidth:1,
        borderRadius:25,
        paddingVertical:5,
        paddingHorizontal:15,
        backgroundColor:'white',
        marginLeft:10,
    },
    name:{
        fontFamily:'Lato-Regular',
        color: "#A3A3A3",
        textAlign:'center',
        marginVertical:5
    },
    ftd:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingHorizontal: '2%',
        paddingVertical: '4%',
    },
    ftdtext:{
        color:"#444444",
        fontFamily:'Lato-Regular',
        fontSize:17.5,
        paddingLeft: '3%',
    },
    expand:{
        resizeMode:'contain',
        width:'4%',
        height:'60%',
    },
    datecontainer:{
        backgroundColor: "#F6F6F6",
        paddingVertical:'3%',
        flexDirection: 'row',
        borderTopColor:"#D2D2D2",
        borderTopWidth:1,
    },
    date:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        fontWeight:'bold',
        color:"#616161",
        paddingLeft:'4%'
    },
    transaction:{
        backgroundColor:'white',
        paddingHorizontal:'4%',
        paddingTop: '2.5%',
        paddingBottom:'1%',
        borderBottomWidth:1,
        borderBottomColor: "#D2D2D2",

    },
    transactionheader:{
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingBottom: '1%'
    },
    transactiontitle:{
        maxWidth:"80%",
        fontFamily:'Lato-Regular',
        fontSize:19,
        color:"#444444"
    },
    transactiontype:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:"#A3A3A3",
        paddingBottom: '2%'
    },
    transactiondetails:{
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: 'white',
        paddingBottom: '1%',
        justifyContent: 'space-between'
    },
    sgd:{
        fontFamily:'Lato-Regular',
        fontSize: 14,
        fontWeight:'bold',
        color:"#A3A3A3",
        textAlign: 'right',
        paddingTop:'1.5%',
        marginRight: '-45%'
        
    },
    money:{
        fontFamily:'Lato-Regular',
        fontSize: 20,
        fontWeight:'bold',
        color:"#444444",
        textAlign: 'right',
    },
    account:{
        fontFamily:'Lato-Regular',
        fontSize: 18,
        color:"#444444",
        textAlign: 'left',
    },


})