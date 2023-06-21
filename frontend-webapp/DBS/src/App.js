import Homescreen from "./views/HomeScreen.js";
import { NavigationContainer } from '@react-navigation/native';
import Recenttransaction from "./views/RecentTransaction.js";
import BottomTabNavigator from "./navigation/BottomTabNavigator.js";
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import Routing from "./routes/Routes.js";
import React from 'react';
import ReactDOM from 'react-dom';
//import { GlobalState } from 'path-to-global-state';
//import App from 'path-to-app-component';

function App() {
  return (
    <Routing></Routing>
  );
}

export default App;
