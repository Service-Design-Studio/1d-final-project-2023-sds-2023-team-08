// ../components/styles/NavigationBarStyles.tsx

import { StyleSheet } from 'react-native';

export const navigationBarStyles = StyleSheet.create({
  tabBar: {
    height: '8%',
    backgroundColor:'#162633',

  },
  icon: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%',
  },
  labels:{
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    marginBottom:'8%',
    marginTop:'-10%'
  }
});
