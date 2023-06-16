import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { recentTransactionStyles } from '../components/styles/RecentTransaction';

const Recenttransaction: React.FC = () => {
  
  return (
    <View style={recentTransactionStyles.container}>
      <View>
        <View style={recentTransactionStyles.header}>
          <TouchableOpacity onPress={() => {}} style={recentTransactionStyles.border}>
            <Image source={require('../../src/components/assets/back.png')} style={recentTransactionStyles.back} />
          </TouchableOpacity>
          <Text style={recentTransactionStyles.headertext}>Recent Transactions</Text>
        </View>
        
        <View style={recentTransactionStyles.filtercontainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => {}}>
              <View style={recentTransactionStyles.filterrectangleunselected}>
                <Text style={recentTransactionStyles.name}>423-24325-0</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={recentTransactionStyles.filterrectangleunselected}>
                <Text style={recentTransactionStyles.name}>423-24325-0</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={recentTransactionStyles.filterrectangleunselected}>
                <Text style={recentTransactionStyles.name}>423-24325-0</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={recentTransactionStyles.filterrectangleunselected}>
                <Text style={recentTransactionStyles.name}>423-24325-0</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={recentTransactionStyles.ftd}>
            <Text style={recentTransactionStyles.ftdtext}>Fund Transfer Dispute Transactions</Text>
            <Image source={require('../../src/components/assets/expand.png')} style={recentTransactionStyles.expand}/>
          </View>
        </TouchableOpacity>

      </View>

      <ScrollView>
        <View style={recentTransactionStyles.datecontainer}>
          <Text style={recentTransactionStyles.date}> Day, Date</Text>
        </View>

        <TouchableOpacity>
          <View style={recentTransactionStyles.transaction}>
            <View style = {recentTransactionStyles.transactionheader}>
              <Text numberOfLines={1} ellipsizeMode="tail" style={recentTransactionStyles.transactiontitle}>PayNow Transfer hehe lmao omg omg hehe lmao is this long enough just checking: XXX</Text>
              <Image source={require('../../src/components/assets/expand.png')} style={recentTransactionStyles.expand}/>
            </View>

            <Text style={recentTransactionStyles.transactiontype}>FAST / PayNow Transfer</Text>
            
            <View style={recentTransactionStyles.transactiondetails}>
              <Text style={recentTransactionStyles.account}>XXX-XXXXX-X</Text>
              <Text style={recentTransactionStyles.sgd}>SGD</Text>
              <Text style={recentTransactionStyles.money}>XX.XX</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Recenttransaction;
