import React, {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Image , ScrollView, TouchableOpacity} from 'react-native';
import { topNavigatorStyles } from '../components/styles/TopNavigationStyles';
import AccountDetails from '../components/codeblocks/AccountDetails';
import accountJson from '../testdata/account.json';

const Tab = createMaterialTopTabNavigator();

const Accounts = () => {
    const [showMore, setShowMore] = useState(false);
    const userAccounts = accountJson[0].account;
    const totalAmounts = userAccounts.map(account => account['total amount']);
    const totalAmountSum = userAccounts.reduce((sum, account) => sum + account['total amount'], 0).toFixed(2);

    return(
    <ScrollView>
        <View style={topNavigatorStyles.container}>
            <View>
                <View style={topNavigatorStyles.header}>
                    <View style={topNavigatorStyles.blueline}>
                    </View>
                    <Text style={topNavigatorStyles.text}>Your Net Worth</Text>
                    <Image source={require('../../src/components/assets/expand.png')} style={topNavigatorStyles.expand}/>
                </View>

                <View style={topNavigatorStyles.containertwo}>
                    <Text style={topNavigatorStyles.value}>Value</Text>
                    <View style={topNavigatorStyles.textcontainer}>
                        <Text style={topNavigatorStyles.sgd}>SGD</Text>
                        <Text style={topNavigatorStyles.money}>{totalAmountSum}</Text>
                    </View>
                </View>

                <View style={topNavigatorStyles.line}>
                </View>
            </View>

            <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                <View>
                    <View style={topNavigatorStyles.header}>
                        <View style={topNavigatorStyles.yellowline}>
                        </View>
                        <Text style={topNavigatorStyles.text}>Deposits</Text>
                        <Image source={require('../../src/components/assets/expand.png')} style={[topNavigatorStyles.expandrotated, showMore && topNavigatorStyles.expandrotated2]}/>
                    </View>

                    <View style={topNavigatorStyles.containertwo}>
                        <Text style={topNavigatorStyles.value}>Balance</Text>
                        <Text style={topNavigatorStyles.money}>{totalAmountSum}</Text>
                    </View>

                    <View style={topNavigatorStyles.line}>
                    </View>
                </View>
            </TouchableOpacity>
            {showMore && (
                <AccountDetails/>
            )}
        </View>
    </ScrollView>
    );
};

const Insights = () => (
    <ScrollView>
        <View style={topNavigatorStyles.insightscontainer}>
            <View style={topNavigatorStyles.rectangle}>
                <Text style={topNavigatorStyles.date}>14 JUN</Text>
                <Text style={topNavigatorStyles.title}>Review your budget</Text>
                <Text style={topNavigatorStyles.body}>You've maintained your monthly spending average.</Text>
            </View>

            <View style={topNavigatorStyles.rectangle}>
                <Text style={topNavigatorStyles.date}>14 JUN</Text>
                <Text style={topNavigatorStyles.title}>Resolve unexpected transactions quickly!</Text>
                <Text style={topNavigatorStyles.body}>Here are some tips for you.</Text>
            </View>

            <View style={topNavigatorStyles.rectangle}>
                <Text style={topNavigatorStyles.date}>14 JUN</Text>
                <Text style={topNavigatorStyles.title}>Was this deposit expected?</Text>
                <Text style={topNavigatorStyles.body}>You don't often receive money from this source.</Text>
            </View>
        </View>
    </ScrollView>
);

const TopNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#444444",
        tabBarInactiveTintColor: "#A3A3A3",
        tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {backgroundColor:'#EBAA4E'},
        })}>      
        <Tab.Screen name="ACCOUNTS" component={Accounts} />
        <Tab.Screen name="INSIGHTS" component={Insights} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
