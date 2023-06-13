// ../components/styles/NavigationBarStyles.tsx

import { StyleSheet } from 'react-native';

export const navigationBarStyles = StyleSheet.create({
  tabBar: {
    height: '8%',
    backgroundColor:'#162633',

  },
  icon: {
    width: 24,
    height: 24,
  },
  labels:{
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    marginBottom:10,
    marginTop:-10
  }
});
