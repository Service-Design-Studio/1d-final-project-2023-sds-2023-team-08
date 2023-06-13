import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { homeScreenStyles } from '../components/styles/HomeScreenStyles';


const App: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={homeScreenStyles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/bellwhite.png')} style={homeScreenStyles.bell} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/eye.png')} style={homeScreenStyles.eye} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/help.png')} style={homeScreenStyles.help} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={homeScreenStyles.logoutContainer}>
              <Text style={homeScreenStyles.logoutText}>LOG OUT</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.alertbody}>
          <Text style={styles.textheader}> Make money work harder!</Text>
          <Text style={styles.textbody}> Find out how you can put your cash flows to good use and achieve a sustainable financial future.</Text>
        </View>

        <View style ={styles.alertbutton}>
          <View style={styles.logoutContainer}>
              <Text style={styles.logoutText}>LET'S TALK</Text>
          </View>      
        </View>
      </View>

      <View style={styles.containertwo}>
        <View style={styles.headertwo}>
          <Text style={styles.text}>Smart Shortcuts</Text>
          <Image source={require('../../src/components/assets/settings.png')} style={styles.setting} />
        </View>
      </View>

      <View style={styles.containerthree}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/paynow.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>PayNow</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/local_transfer.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Transfer Money</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/scan&pay.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Scan & Pay</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/transaction_history.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Transaction History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/local_transfer_limit.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Local Transfer Limit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/livebetter.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Live Better</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/bill.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Bills</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/setpeekbalance.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Set Peek Balance</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../src/components/assets/icons/scheduletransfer.png')} style={styles.paynow} />
            <Text style={styles.shortcut}>Scheduled Transfers</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.containerfour}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.recenttransaction}>
            <Text style={styles.recenttransactiontext}>Recent Transaction</Text>
            <Image source={require('../../src/components/assets/expand.png')} style={styles.expand}/>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text> TAB NAVIGATOR HERE HAHA</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  logoutContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  logoutText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

});

export default App;
