// App.tsx

import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< Updated upstream
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
=======
import BottomTabNavigator from './src/navigation/NavigationBar';
import FTdetail from './src/views/FTDetailsPage';
>>>>>>> Stashed changes

const App: React.FC = () => {
  return (
    <View>
      <FTdetail/>
    </View>
  );
};

export default App;
