import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { navigationBarStyles } from '../components/styles/BottomTabNavigatorStyles.tsx';
import HomeScreen from '../views/HomeScreen';
import Recenttransaction from '../views/RecentTransaction';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('../components/assets/navbar/home_bottomfilled.png')
              : require('../components/assets/navbar/home_bottom.png');
          } else if (route.name === 'Invest') {
            iconSource = focused
              ? require('../components/assets/navbar/invest_bottom.png')
              : require('../components/assets/navbar/invest_bottom.png');
          } else if (route.name === 'Pay & Transfer') {
            iconSource = focused
              ? require('../components/assets/navbar/pay&transfer_bottomfilled.png')
              : require('../components/assets/navbar/pay&transfer_bottom.png');
          } else if (route.name === 'Plan') {
            iconSource = focused
              ? require('../components/assets/navbar/plan_bottom.png')
              : require('../components/assets/navbar/plan_bottom.png');
          } else if (route.name === 'More') {
            iconSource = focused
              ? require('../components/assets/navbar/more_bottom.png')
              : require('../components/assets/navbar/more_bottom.png');
          }

          return <Image source={iconSource} style={navigationBarStyles.icon} />;
        },

        tabBarStyle: navigationBarStyles.tabBar,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor:"#96A5B0",
        tabBarLabelStyle: navigationBarStyles.labels,

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Invest" component={Recenttransaction} />
      <Tab.Screen name="Pay & Transfer" component={HomeScreen} />
      <Tab.Screen name="Plan" component={HomeScreen} />
      <Tab.Screen name="More" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
