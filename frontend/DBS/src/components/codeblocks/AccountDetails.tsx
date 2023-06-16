import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { accountDetailsStyles } from '../styles/AccountDetailsStyles';
import accountJson from '../../testdata/account.json';

const AccountDetails: React.FC = () => {
    const userAccounts = accountJson[0].account;
    
    return (
        <View>
          {userAccounts.map((account, index) => (
            <TouchableOpacity onPress={() => {}}>
                <View style={accountDetailsStyles.account} key={index}>
                <View style={accountDetailsStyles.accountheader}>
                    <Text style={accountDetailsStyles.accountname}>
                    {account['account type']}
                    </Text>
                    <Image
                    source={require('../assets/expand.png')}
                    style={accountDetailsStyles.accountexpand}
                    />
                </View>
                <Text style={accountDetailsStyles.accountnumber}>
                    {account['account number']}
                </Text>
                <View style={accountDetailsStyles.textcontainer}>
                    <Text style={accountDetailsStyles.sgd}>SGD</Text>
                    <Text style={accountDetailsStyles.money}>
                    {account['total amount'].toFixed(2)}
                    </Text>
                </View>
                <View style={accountDetailsStyles.line}></View>
                </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

export default AccountDetails;