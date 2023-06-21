import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { FTDetailsPageStyles } from '../components/styles/FTDetailsPageStyles';


const FTdetail = () => {
  return (
    <View style={FTDetailsPageStyles.bgbase}>
      <View>
        <View style={FTDetailsPageStyles.description}>
        <Text> Description </Text>
        <Text> TOP-UP TO PAYLAH! : 9999 9999 </Text>
        <Text> </Text>
        <Text> Transaction Type </Text>
        <Text> Funds Transfer </Text>
        </View>
      </View>

      <View style={FTDetailsPageStyles.money}>
        <Text> sgd 50.00 </Text>
        <Text> 29 May </Text>
      </View>

      <View style={FTDetailsPageStyles.sharebutton}>
        <Text> Share </Text>
      </View>

      <View style={FTDetailsPageStyles.raisebutton}>
        <Text> Raise a Fund Dispute </Text>
      </View>
    </View>
  );
};

export default FTdetail;