import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { homeScreenStyles } from '../components/styles/HomeScreenStyles';
import TopNavigator from '../navigation/TopNavigation';

const Homescreen: React.FC = () => {
  
  return (
    <View style={homeScreenStyles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <View style={homeScreenStyles.header}>
            <View style={homeScreenStyles.leftcontainer}>
              <TouchableOpacity onPress={() => {}}>
                <Image source={require('../../src/components/assets/bellwhite.png')} style={homeScreenStyles.bell} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image source={require('../../src/components/assets/eye.png')} style={homeScreenStyles.eye} />
              </TouchableOpacity>
            </View>

            <View style={homeScreenStyles.rightcontainer}>
              <TouchableOpacity onPress={() => {}}>
                <Image source={require('../../src/components/assets/help.png')} style={homeScreenStyles.help} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={homeScreenStyles.logoutContainer}>
                  <Text style={homeScreenStyles.logoutText}>LOG OUT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={homeScreenStyles.alertbody}>
            <Text style={homeScreenStyles.textheader}> Make money work harder!</Text>
            <Text style={homeScreenStyles.textbody}> Find out how you can put your cash flows to good use</Text>
            <Text style={homeScreenStyles.textbody}> and achieve a sustainable financial future.</Text>   
          </View>

          <View style ={homeScreenStyles.alertbutton}>
            <TouchableOpacity>
              <View style={homeScreenStyles.buttonContainer}>
                  <Text style={homeScreenStyles.buttonText}>LET'S TALK</Text>
              </View>
            </TouchableOpacity>      
          </View>
        </View>

        <View style={homeScreenStyles.containertwo}>
          <Text style={homeScreenStyles.text}>Smart Shortcuts</Text>
          <Image source={require('../../src/components/assets/settings.png')} style={homeScreenStyles.setting} />
        </View>

        <View style={homeScreenStyles.containerthree}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/paynow.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>PayNow</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/local_transfer.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Transfer Money</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/scan&pay.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Scan & Pay</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/transaction_history.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Transaction History</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/local_transfer_limit.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Local Transfer Limit</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/livebetter.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Live Better</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/bill.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Bills</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
            <View style={homeScreenStyles.iconcontainer}>
              <Image source={require('../../src/components/assets/icons/setpeekbalance.png')} style={homeScreenStyles.icons} />
              <Text style={homeScreenStyles.shortcut}>Set Peek Balance</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={homeScreenStyles.iconcontainer}>
                <Image source={require('../../src/components/assets/icons/scheduletransfer.png')} style={homeScreenStyles.icons} />
                <Text style={homeScreenStyles.shortcut}>Scheduled Transfers</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={homeScreenStyles.containerfour}>
          <TouchableOpacity onPress={() => {}}>
            <View style={homeScreenStyles.recenttransaction}>
              <Text style={homeScreenStyles.recenttransactiontext}>Recent Transactions</Text>
              <Image source={require('../../src/components/assets/expand.png')} style={homeScreenStyles.expand}/>
            </View>
          </TouchableOpacity>
        </View>

        <TopNavigator/>

      </ScrollView>
    </View>
  );
};

export default Homescreen;
